# `dataOciOpsiEnterpriseManagerBridge` Submodule <a name="`dataOciOpsiEnterpriseManagerBridge` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiEnterpriseManagerBridge <a name="DataOciOpsiEnterpriseManagerBridge" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridge oci_opsi_enterprise_manager_bridge}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridge(Construct Scope, string Id, DataOciOpsiEnterpriseManagerBridgeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig">DataOciOpsiEnterpriseManagerBridgeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig">DataOciOpsiEnterpriseManagerBridgeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiEnterpriseManagerBridge resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiEnterpriseManagerBridge.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiEnterpriseManagerBridge.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiEnterpriseManagerBridge.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiEnterpriseManagerBridge.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOpsiEnterpriseManagerBridge resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiEnterpriseManagerBridge to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiEnterpriseManagerBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridge#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiEnterpriseManagerBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.objectStorageBucketStatusDetails">ObjectStorageBucketStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.objectStorageNamespaceName">ObjectStorageNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.enterpriseManagerBridgeIdInput">EnterpriseManagerBridgeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.objectStorageBucketName"></a>

```csharp
public string ObjectStorageBucketName { get; }
```

- *Type:* string

---

##### `ObjectStorageBucketStatusDetails`<sup>Required</sup> <a name="ObjectStorageBucketStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.objectStorageBucketStatusDetails"></a>

```csharp
public string ObjectStorageBucketStatusDetails { get; }
```

- *Type:* string

---

##### `ObjectStorageNamespaceName`<sup>Required</sup> <a name="ObjectStorageNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.objectStorageNamespaceName"></a>

```csharp
public string ObjectStorageNamespaceName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `EnterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="EnterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.enterpriseManagerBridgeIdInput"></a>

```csharp
public string EnterpriseManagerBridgeIdInput { get; }
```

- *Type:* string

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.enterpriseManagerBridgeId"></a>

```csharp
public string EnterpriseManagerBridgeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridge.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiEnterpriseManagerBridgeConfig <a name="DataOciOpsiEnterpriseManagerBridgeConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiEnterpriseManagerBridgeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnterpriseManagerBridgeId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridge#enterprise_manager_bridge_id DataOciOpsiEnterpriseManagerBridge#enterprise_manager_bridge_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridge.DataOciOpsiEnterpriseManagerBridgeConfig.property.enterpriseManagerBridgeId"></a>

```csharp
public string EnterpriseManagerBridgeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridge#enterprise_manager_bridge_id DataOciOpsiEnterpriseManagerBridge#enterprise_manager_bridge_id}.

---


