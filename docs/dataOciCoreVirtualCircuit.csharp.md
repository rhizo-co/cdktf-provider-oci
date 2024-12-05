# `dataOciCoreVirtualCircuit` Submodule <a name="`dataOciCoreVirtualCircuit` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuit <a name="DataOciCoreVirtualCircuit" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit oci_core_virtual_circuit}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuit(Construct Scope, string Id, DataOciCoreVirtualCircuitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig">DataOciCoreVirtualCircuitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig">DataOciCoreVirtualCircuitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuit resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuit.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuit resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVirtualCircuit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVirtualCircuit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bandwidthShapeName">BandwidthShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpAdminState">BgpAdminState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpIpv6SessionState">BgpIpv6SessionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpManagement">BgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpSessionState">BgpSessionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.crossConnectMappings">CrossConnectMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList">DataOciCoreVirtualCircuitCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.customerAsn">CustomerAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.ipMtu">IpMtu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.isBfdEnabled">IsBfdEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.isTransportMode">IsTransportMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerServiceId">ProviderServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerServiceKeyName">ProviderServiceKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerState">ProviderState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.publicPrefixes">PublicPrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.referenceComment">ReferenceComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.routingPolicy">RoutingPolicy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitRedundancyMetadata">VirtualCircuitRedundancyMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitIdInput">VirtualCircuitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BandwidthShapeName`<sup>Required</sup> <a name="BandwidthShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bandwidthShapeName"></a>

```csharp
public string BandwidthShapeName { get; }
```

- *Type:* string

---

##### `BgpAdminState`<sup>Required</sup> <a name="BgpAdminState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpAdminState"></a>

```csharp
public string BgpAdminState { get; }
```

- *Type:* string

---

##### `BgpIpv6SessionState`<sup>Required</sup> <a name="BgpIpv6SessionState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpIpv6SessionState"></a>

```csharp
public string BgpIpv6SessionState { get; }
```

- *Type:* string

---

##### `BgpManagement`<sup>Required</sup> <a name="BgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpManagement"></a>

```csharp
public string BgpManagement { get; }
```

- *Type:* string

---

##### `BgpSessionState`<sup>Required</sup> <a name="BgpSessionState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpSessionState"></a>

```csharp
public string BgpSessionState { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CrossConnectMappings`<sup>Required</sup> <a name="CrossConnectMappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.crossConnectMappings"></a>

```csharp
public DataOciCoreVirtualCircuitCrossConnectMappingsList CrossConnectMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList">DataOciCoreVirtualCircuitCrossConnectMappingsList</a>

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.customerAsn"></a>

```csharp
public string CustomerAsn { get; }
```

- *Type:* string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.customerBgpAsn"></a>

```csharp
public double CustomerBgpAsn { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpMtu`<sup>Required</sup> <a name="IpMtu" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.ipMtu"></a>

```csharp
public string IpMtu { get; }
```

- *Type:* string

---

##### `IsBfdEnabled`<sup>Required</sup> <a name="IsBfdEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.isBfdEnabled"></a>

```csharp
public IResolvable IsBfdEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsTransportMode`<sup>Required</sup> <a name="IsTransportMode" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.isTransportMode"></a>

```csharp
public IResolvable IsTransportMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.oracleBgpAsn"></a>

```csharp
public double OracleBgpAsn { get; }
```

- *Type:* double

---

##### `ProviderServiceId`<sup>Required</sup> <a name="ProviderServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerServiceId"></a>

```csharp
public string ProviderServiceId { get; }
```

- *Type:* string

---

##### `ProviderServiceKeyName`<sup>Required</sup> <a name="ProviderServiceKeyName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerServiceKeyName"></a>

```csharp
public string ProviderServiceKeyName { get; }
```

- *Type:* string

---

##### `ProviderState`<sup>Required</sup> <a name="ProviderState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerState"></a>

```csharp
public string ProviderState { get; }
```

- *Type:* string

---

##### `PublicPrefixes`<sup>Required</sup> <a name="PublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.publicPrefixes"></a>

```csharp
public DataOciCoreVirtualCircuitPublicPrefixesList PublicPrefixes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesList</a>

---

##### `ReferenceComment`<sup>Required</sup> <a name="ReferenceComment" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.referenceComment"></a>

```csharp
public string ReferenceComment { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoutingPolicy`<sup>Required</sup> <a name="RoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.routingPolicy"></a>

```csharp
public string[] RoutingPolicy { get; }
```

- *Type:* string[]

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VirtualCircuitRedundancyMetadata`<sup>Required</sup> <a name="VirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitRedundancyMetadata"></a>

```csharp
public DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList VirtualCircuitRedundancyMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a>

---

##### `VirtualCircuitIdInput`<sup>Optional</sup> <a name="VirtualCircuitIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitIdInput"></a>

```csharp
public string VirtualCircuitIdInput { get; }
```

- *Type:* string

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitId"></a>

```csharp
public string VirtualCircuitId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitConfig <a name="DataOciCoreVirtualCircuitConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VirtualCircuitId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit#virtual_circuit_id DataOciCoreVirtualCircuit#virtual_circuit_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.virtualCircuitId"></a>

```csharp
public string VirtualCircuitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit#virtual_circuit_id DataOciCoreVirtualCircuit#virtual_circuit_id}.

---

### DataOciCoreVirtualCircuitCrossConnectMappings <a name="DataOciCoreVirtualCircuitCrossConnectMappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitCrossConnectMappings {

};
```


### DataOciCoreVirtualCircuitPublicPrefixes <a name="DataOciCoreVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixes {

};
```


### DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata <a name="DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitCrossConnectMappingsList <a name="DataOciCoreVirtualCircuitCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitCrossConnectMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.get"></a>

```csharp
private DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference <a name="DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">BgpMd5AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">CrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">CustomerBgpPeeringIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">CustomerBgpPeeringIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">OracleBgpPeeringIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">OracleBgpPeeringIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings">DataOciCoreVirtualCircuitCrossConnectMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpMd5AuthKey`<sup>Required</sup> <a name="BgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```csharp
public string BgpMd5AuthKey { get; }
```

- *Type:* string

---

##### `CrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="CrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```csharp
public string CrossConnectOrCrossConnectGroupId { get; }
```

- *Type:* string

---

##### `CustomerBgpPeeringIp`<sup>Required</sup> <a name="CustomerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```csharp
public string CustomerBgpPeeringIp { get; }
```

- *Type:* string

---

##### `CustomerBgpPeeringIpv6`<sup>Required</sup> <a name="CustomerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```csharp
public string CustomerBgpPeeringIpv6 { get; }
```

- *Type:* string

---

##### `OracleBgpPeeringIp`<sup>Required</sup> <a name="OracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```csharp
public string OracleBgpPeeringIp { get; }
```

- *Type:* string

---

##### `OracleBgpPeeringIpv6`<sup>Required</sup> <a name="OracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```csharp
public string OracleBgpPeeringIpv6 { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreVirtualCircuitCrossConnectMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings">DataOciCoreVirtualCircuitCrossConnectMappings</a>

---


### DataOciCoreVirtualCircuitPublicPrefixesList <a name="DataOciCoreVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.get"></a>

```csharp
private DataOciCoreVirtualCircuitPublicPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreVirtualCircuitPublicPrefixesOutputReference <a name="DataOciCoreVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreVirtualCircuitPublicPrefixes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixes</a>

---


### DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList <a name="DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get"></a>

```csharp
private DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference <a name="DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">ConfiguredRedundancyLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">Ipv4BgpSessionRedundancyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">Ipv6BgpSessionRedundancyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfiguredRedundancyLevel`<sup>Required</sup> <a name="ConfiguredRedundancyLevel" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```csharp
public string ConfiguredRedundancyLevel { get; }
```

- *Type:* string

---

##### `Ipv4BgpSessionRedundancyStatus`<sup>Required</sup> <a name="Ipv4BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```csharp
public string Ipv4BgpSessionRedundancyStatus { get; }
```

- *Type:* string

---

##### `Ipv6BgpSessionRedundancyStatus`<sup>Required</sup> <a name="Ipv6BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```csharp
public string Ipv6BgpSessionRedundancyStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata</a>

---



