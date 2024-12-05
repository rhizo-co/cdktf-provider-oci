# `dataOciCoreIpsecConnectionTunnelRoutes` Submodule <a name="`dataOciCoreIpsecConnectionTunnelRoutes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnelRoutes <a name="DataOciCoreIpsecConnectionTunnelRoutes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes oci_core_ipsec_connection_tunnel_routes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelRoutes(Construct Scope, string Id, DataOciCoreIpsecConnectionTunnelRoutesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig">DataOciCoreIpsecConnectionTunnelRoutesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig">DataOciCoreIpsecConnectionTunnelRoutesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetAdvertiser">ResetAdvertiser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAdvertiser` <a name="ResetAdvertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetAdvertiser"></a>

```csharp
private void ResetAdvertiser()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnelRoutes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnelRoutes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnelRoutes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnelRoutes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnelRoutes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnelRoutes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnelRoutes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpsecConnectionTunnelRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnelRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList">DataOciCoreIpsecConnectionTunnelRoutesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelRoutes">TunnelRoutes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiserInput">AdvertiserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecIdInput">IpsecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiser">Advertiser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecId">IpsecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filter"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelRoutesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList">DataOciCoreIpsecConnectionTunnelRoutesFilterList</a>

---

##### `TunnelRoutes`<sup>Required</sup> <a name="TunnelRoutes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelRoutes"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList TunnelRoutes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList</a>

---

##### `AdvertiserInput`<sup>Optional</sup> <a name="AdvertiserInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiserInput"></a>

```csharp
public string AdvertiserInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpsecIdInput`<sup>Optional</sup> <a name="IpsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecIdInput"></a>

```csharp
public string IpsecIdInput { get; }
```

- *Type:* string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `Advertiser`<sup>Required</sup> <a name="Advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiser"></a>

```csharp
public string Advertiser { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecId"></a>

```csharp
public string IpsecId { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelRoutesConfig <a name="DataOciCoreIpsecConnectionTunnelRoutesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelRoutesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpsecId,
    string TunnelId,
    string Advertiser = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.ipsecId">IpsecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#ipsec_id DataOciCoreIpsecConnectionTunnelRoutes#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#tunnel_id DataOciCoreIpsecConnectionTunnelRoutes#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.advertiser">Advertiser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#advertiser DataOciCoreIpsecConnectionTunnelRoutes#advertiser}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#id DataOciCoreIpsecConnectionTunnelRoutes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.ipsecId"></a>

```csharp
public string IpsecId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#ipsec_id DataOciCoreIpsecConnectionTunnelRoutes#ipsec_id}.

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#tunnel_id DataOciCoreIpsecConnectionTunnelRoutes#tunnel_id}.

---

##### `Advertiser`<sup>Optional</sup> <a name="Advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.advertiser"></a>

```csharp
public string Advertiser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#advertiser DataOciCoreIpsecConnectionTunnelRoutes#advertiser}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#filter DataOciCoreIpsecConnectionTunnelRoutes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#id DataOciCoreIpsecConnectionTunnelRoutes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecConnectionTunnelRoutesFilter <a name="DataOciCoreIpsecConnectionTunnelRoutesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelRoutesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#name DataOciCoreIpsecConnectionTunnelRoutes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#values DataOciCoreIpsecConnectionTunnelRoutes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#regex DataOciCoreIpsecConnectionTunnelRoutes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#name DataOciCoreIpsecConnectionTunnelRoutes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#values DataOciCoreIpsecConnectionTunnelRoutes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#regex DataOciCoreIpsecConnectionTunnelRoutes#regex}.

---

### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelRoutesFilterList <a name="DataOciCoreIpsecConnectionTunnelRoutesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelRoutesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference <a name="DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.advertiser">Advertiser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.age">Age</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.asPath">AsPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.isBestPath">IsBestPath</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Advertiser`<sup>Required</sup> <a name="Advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.advertiser"></a>

```csharp
public string Advertiser { get; }
```

- *Type:* string

---

##### `Age`<sup>Required</sup> <a name="Age" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.age"></a>

```csharp
public string Age { get; }
```

- *Type:* string

---

##### `AsPath`<sup>Required</sup> <a name="AsPath" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.asPath"></a>

```csharp
public double[] AsPath { get; }
```

- *Type:* double[]

---

##### `IsBestPath`<sup>Required</sup> <a name="IsBestPath" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.isBestPath"></a>

```csharp
public IResolvable IsBestPath { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes</a>

---



