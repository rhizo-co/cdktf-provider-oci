# `dataOciCoreIpsecConnectionTunnels` Submodule <a name="`dataOciCoreIpsecConnectionTunnels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnels <a name="DataOciCoreIpsecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels oci_core_ipsec_connection_tunnels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnels(Construct Scope, string Id, DataOciCoreIpsecConnectionTunnelsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig">DataOciCoreIpsecConnectionTunnelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig">DataOciCoreIpsecConnectionTunnelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnels.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecConnectionTunnels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpsecConnectionTunnels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList">DataOciCoreIpsecConnectionTunnelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipSecConnectionTunnels">IpSecConnectionTunnels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecIdInput">IpsecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecId">IpsecId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filter"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList">DataOciCoreIpsecConnectionTunnelsFilterList</a>

---

##### `IpSecConnectionTunnels`<sup>Required</sup> <a name="IpSecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipSecConnectionTunnels"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList IpSecConnectionTunnels { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpsecIdInput`<sup>Optional</sup> <a name="IpsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecIdInput"></a>

```csharp
public string IpsecIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecId"></a>

```csharp
public string IpsecId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelsConfig <a name="DataOciCoreIpsecConnectionTunnelsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpsecId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.ipsecId">IpsecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.ipsecId"></a>

```csharp
public string IpsecId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#filter DataOciCoreIpsecConnectionTunnels#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecConnectionTunnelsFilter <a name="DataOciCoreIpsecConnectionTunnelsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}.

---

### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels {

};
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo {

};
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig {

};
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig {

};
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails {

};
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelsFilterList <a name="DataOciCoreIpsecConnectionTunnelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreIpsecConnectionTunnelsFilterOutputReference <a name="DataOciCoreIpsecConnectionTunnelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpIpv6State">BgpIpv6State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpState">BgpState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIp">CustomerInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIpv6">CustomerInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIp">OracleInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">OracleInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpIpv6State`<sup>Required</sup> <a name="BgpIpv6State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```csharp
public string BgpIpv6State { get; }
```

- *Type:* string

---

##### `BgpState`<sup>Required</sup> <a name="BgpState" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpState"></a>

```csharp
public string BgpState { get; }
```

- *Type:* string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```csharp
public string CustomerBgpAsn { get; }
```

- *Type:* string

---

##### `CustomerInterfaceIp`<sup>Required</sup> <a name="CustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```csharp
public string CustomerInterfaceIp { get; }
```

- *Type:* string

---

##### `CustomerInterfaceIpv6`<sup>Required</sup> <a name="CustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```csharp
public string CustomerInterfaceIpv6 { get; }
```

- *Type:* string

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```csharp
public string OracleBgpAsn { get; }
```

- *Type:* string

---

##### `OracleInterfaceIp`<sup>Required</sup> <a name="OracleInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```csharp
public string OracleInterfaceIp { get; }
```

- *Type:* string

---

##### `OracleInterfaceIpv6`<sup>Required</sup> <a name="OracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```csharp
public string OracleInterfaceIpv6 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdMode">DpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdMode"></a>

```csharp
public string DpdMode { get; }
```

- *Type:* string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```csharp
public double DpdTimeoutInSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">CpeTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">OracleTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpeTrafficSelector`<sup>Required</sup> <a name="CpeTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```csharp
public string[] CpeTrafficSelector { get; }
```

- *Type:* string[]

---

##### `OracleTrafficSelector`<sup>Required</sup> <a name="OracleTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```csharp
public string[] OracleTrafficSelector { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.associatedVirtualCircuits">AssociatedVirtualCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.bgpSessionInfo">BgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.cpeIp">CpeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdConfig">DpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdMode">DpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.encryptionDomainConfig">EncryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ikeVersion">IkeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ipsecId">IpsecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.natTranslationEnabled">NatTranslationEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.oracleCanInitiate">OracleCanInitiate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseOneDetails">PhaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseTwoDetails">PhaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.routing">Routing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.vpnIp">VpnIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociatedVirtualCircuits`<sup>Required</sup> <a name="AssociatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.associatedVirtualCircuits"></a>

```csharp
public string[] AssociatedVirtualCircuits { get; }
```

- *Type:* string[]

---

##### `BgpSessionInfo`<sup>Required</sup> <a name="BgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.bgpSessionInfo"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList BgpSessionInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpeIp`<sup>Required</sup> <a name="CpeIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.cpeIp"></a>

```csharp
public string CpeIp { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DpdConfig`<sup>Required</sup> <a name="DpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdConfig"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList DpdConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList</a>

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdMode"></a>

```csharp
public string DpdMode { get; }
```

- *Type:* string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdTimeoutInSec"></a>

```csharp
public double DpdTimeoutInSec { get; }
```

- *Type:* double

---

##### `EncryptionDomainConfig`<sup>Required</sup> <a name="EncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.encryptionDomainConfig"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList EncryptionDomainConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ikeVersion"></a>

```csharp
public string IkeVersion { get; }
```

- *Type:* string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ipsecId"></a>

```csharp
public string IpsecId { get; }
```

- *Type:* string

---

##### `NatTranslationEnabled`<sup>Required</sup> <a name="NatTranslationEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.natTranslationEnabled"></a>

```csharp
public string NatTranslationEnabled { get; }
```

- *Type:* string

---

##### `OracleCanInitiate`<sup>Required</sup> <a name="OracleCanInitiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.oracleCanInitiate"></a>

```csharp
public string OracleCanInitiate { get; }
```

- *Type:* string

---

##### `PhaseOneDetails`<sup>Required</sup> <a name="PhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseOneDetails"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList PhaseOneDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList</a>

---

##### `PhaseTwoDetails`<sup>Required</sup> <a name="PhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseTwoDetails"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList PhaseTwoDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList</a>

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.routing"></a>

```csharp
public string Routing { get; }
```

- *Type:* string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeStatusUpdated"></a>

```csharp
public string TimeStatusUpdated { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `VpnIp`<sup>Required</sup> <a name="VpnIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.vpnIp"></a>

```csharp
public string VpnIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customDhGroup">CustomDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">IsCustomPhaseOneConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isIkeEstablished">IsIkeEstablished</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```csharp
public string CustomAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `CustomDhGroup`<sup>Required</sup> <a name="CustomDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```csharp
public string CustomDhGroup { get; }
```

- *Type:* string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```csharp
public string CustomEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `IsCustomPhaseOneConfig`<sup>Required</sup> <a name="IsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```csharp
public IResolvable IsCustomPhaseOneConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsIkeEstablished`<sup>Required</sup> <a name="IsIkeEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```csharp
public IResolvable IsIkeEstablished { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```csharp
public string NegotiatedAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```csharp
public string NegotiatedDhGroup { get; }
```

- *Type:* string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```csharp
public string NegotiatedEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```csharp
public string RemainingLifetime { get; }
```

- *Type:* string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```csharp
public double RemainingLifetimeInt { get; }
```

- *Type:* double

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```csharp
public string RemainingLifetimeLastRetrieved { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get"></a>

```csharp
private DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.dhGroup">DhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">IsCustomPhaseTwoConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isEspEstablished">IsEspEstablished</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isPfsEnabled">IsPfsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```csharp
public string CustomAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```csharp
public string CustomEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```csharp
public string DhGroup { get; }
```

- *Type:* string

---

##### `IsCustomPhaseTwoConfig`<sup>Required</sup> <a name="IsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```csharp
public IResolvable IsCustomPhaseTwoConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEspEstablished`<sup>Required</sup> <a name="IsEspEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```csharp
public IResolvable IsEspEstablished { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPfsEnabled`<sup>Required</sup> <a name="IsPfsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```csharp
public IResolvable IsPfsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```csharp
public string NegotiatedAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```csharp
public string NegotiatedDhGroup { get; }
```

- *Type:* string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```csharp
public string NegotiatedEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```csharp
public string RemainingLifetime { get; }
```

- *Type:* string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```csharp
public double RemainingLifetimeInt { get; }
```

- *Type:* double

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```csharp
public string RemainingLifetimeLastRetrieved { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails</a>

---



