# `dataOciCoreIpsecConnectionTunnel` Submodule <a name="`dataOciCoreIpsecConnectionTunnel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnel <a name="DataOciCoreIpsecConnectionTunnel" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel oci_core_ipsec_connection_tunnel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnel(Construct Scope, string Id, DataOciCoreIpsecConnectionTunnelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig">DataOciCoreIpsecConnectionTunnelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig">DataOciCoreIpsecConnectionTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnel.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpsecConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits">AssociatedVirtualCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo">BgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp">CpeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig">DpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode">DpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig">EncryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion">IkeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled">NatTranslationEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate">OracleCanInitiate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails">PhaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails">PhaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing">Routing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp">VpnIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput">IpsecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId">IpsecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AssociatedVirtualCircuits`<sup>Required</sup> <a name="AssociatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits"></a>

```csharp
public string[] AssociatedVirtualCircuits { get; }
```

- *Type:* string[]

---

##### `BgpSessionInfo`<sup>Required</sup> <a name="BgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelBgpSessionInfoList BgpSessionInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpeIp`<sup>Required</sup> <a name="CpeIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp"></a>

```csharp
public string CpeIp { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DpdConfig`<sup>Required</sup> <a name="DpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelDpdConfigList DpdConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a>

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode"></a>

```csharp
public string DpdMode { get; }
```

- *Type:* string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec"></a>

```csharp
public double DpdTimeoutInSec { get; }
```

- *Type:* double

---

##### `EncryptionDomainConfig`<sup>Required</sup> <a name="EncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList EncryptionDomainConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion"></a>

```csharp
public string IkeVersion { get; }
```

- *Type:* string

---

##### `NatTranslationEnabled`<sup>Required</sup> <a name="NatTranslationEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled"></a>

```csharp
public string NatTranslationEnabled { get; }
```

- *Type:* string

---

##### `OracleCanInitiate`<sup>Required</sup> <a name="OracleCanInitiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate"></a>

```csharp
public string OracleCanInitiate { get; }
```

- *Type:* string

---

##### `PhaseOneDetails`<sup>Required</sup> <a name="PhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList PhaseOneDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a>

---

##### `PhaseTwoDetails`<sup>Required</sup> <a name="PhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList PhaseTwoDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a>

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing"></a>

```csharp
public string Routing { get; }
```

- *Type:* string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated"></a>

```csharp
public string TimeStatusUpdated { get; }
```

- *Type:* string

---

##### `VpnIp`<sup>Required</sup> <a name="VpnIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp"></a>

```csharp
public string VpnIp { get; }
```

- *Type:* string

---

##### `IpsecIdInput`<sup>Optional</sup> <a name="IpsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput"></a>

```csharp
public string IpsecIdInput { get; }
```

- *Type:* string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId"></a>

```csharp
public string IpsecId { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelBgpSessionInfo {

};
```


### DataOciCoreIpsecConnectionTunnelConfig <a name="DataOciCoreIpsecConnectionTunnelConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpsecId,
    string TunnelId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId">IpsecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId"></a>

```csharp
public string IpsecId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}.

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}.

---

### DataOciCoreIpsecConnectionTunnelDpdConfig <a name="DataOciCoreIpsecConnectionTunnelDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelDpdConfig {

};
```


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig {

};
```


### DataOciCoreIpsecConnectionTunnelPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelPhaseOneDetails {

};
```


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelPhaseTwoDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelBgpSessionInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State">BgpIpv6State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState">BgpState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp">CustomerInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6">CustomerInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp">OracleInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">OracleInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpIpv6State`<sup>Required</sup> <a name="BgpIpv6State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```csharp
public string BgpIpv6State { get; }
```

- *Type:* string

---

##### `BgpState`<sup>Required</sup> <a name="BgpState" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState"></a>

```csharp
public string BgpState { get; }
```

- *Type:* string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```csharp
public string CustomerBgpAsn { get; }
```

- *Type:* string

---

##### `CustomerInterfaceIp`<sup>Required</sup> <a name="CustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```csharp
public string CustomerInterfaceIp { get; }
```

- *Type:* string

---

##### `CustomerInterfaceIpv6`<sup>Required</sup> <a name="CustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```csharp
public string CustomerInterfaceIpv6 { get; }
```

- *Type:* string

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```csharp
public string OracleBgpAsn { get; }
```

- *Type:* string

---

##### `OracleInterfaceIp`<sup>Required</sup> <a name="OracleInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```csharp
public string OracleInterfaceIp { get; }
```

- *Type:* string

---

##### `OracleInterfaceIpv6`<sup>Required</sup> <a name="OracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```csharp
public string OracleInterfaceIpv6 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelBgpSessionInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelDpdConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode">DpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode"></a>

```csharp
public string DpdMode { get; }
```

- *Type:* string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```csharp
public double DpdTimeoutInSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelDpdConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">CpeTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">OracleTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpeTrafficSelector`<sup>Required</sup> <a name="CpeTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```csharp
public string[] CpeTrafficSelector { get; }
```

- *Type:* string[]

---

##### `OracleTrafficSelector`<sup>Required</sup> <a name="OracleTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```csharp
public string[] OracleTrafficSelector { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup">CustomDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">IsCustomPhaseOneConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished">IsIkeEstablished</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```csharp
public string CustomAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `CustomDhGroup`<sup>Required</sup> <a name="CustomDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```csharp
public string CustomDhGroup { get; }
```

- *Type:* string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```csharp
public string CustomEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `IsCustomPhaseOneConfig`<sup>Required</sup> <a name="IsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```csharp
public IResolvable IsCustomPhaseOneConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsIkeEstablished`<sup>Required</sup> <a name="IsIkeEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```csharp
public IResolvable IsIkeEstablished { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```csharp
public string NegotiatedAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```csharp
public string NegotiatedDhGroup { get; }
```

- *Type:* string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```csharp
public string NegotiatedEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```csharp
public string RemainingLifetime { get; }
```

- *Type:* string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```csharp
public double RemainingLifetimeInt { get; }
```

- *Type:* double

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```csharp
public string RemainingLifetimeLastRetrieved { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelPhaseOneDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup">DhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">IsCustomPhaseTwoConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished">IsEspEstablished</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled">IsPfsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```csharp
public string CustomAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```csharp
public string CustomEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```csharp
public string DhGroup { get; }
```

- *Type:* string

---

##### `IsCustomPhaseTwoConfig`<sup>Required</sup> <a name="IsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```csharp
public IResolvable IsCustomPhaseTwoConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEspEstablished`<sup>Required</sup> <a name="IsEspEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```csharp
public IResolvable IsEspEstablished { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPfsEnabled`<sup>Required</sup> <a name="IsPfsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```csharp
public IResolvable IsPfsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```csharp
public string NegotiatedAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```csharp
public string NegotiatedDhGroup { get; }
```

- *Type:* string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```csharp
public string NegotiatedEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```csharp
public string RemainingLifetime { get; }
```

- *Type:* string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```csharp
public double RemainingLifetimeInt { get; }
```

- *Type:* double

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```csharp
public string RemainingLifetimeLastRetrieved { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelPhaseTwoDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a>

---



