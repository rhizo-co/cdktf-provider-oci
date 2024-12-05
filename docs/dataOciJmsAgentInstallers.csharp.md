# `dataOciJmsAgentInstallers` Submodule <a name="`dataOciJmsAgentInstallers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsAgentInstallers <a name="DataOciJmsAgentInstallers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers oci_jms_agent_installers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallers(Construct Scope, string Id, DataOciJmsAgentInstallersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig">DataOciJmsAgentInstallersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig">DataOciJmsAgentInstallersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetFleetId">ResetFleetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetPlatformArchitecture">ResetPlatformArchitecture</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFleetId` <a name="ResetFleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetFleetId"></a>

```csharp
private void ResetFleetId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetOsFamily"></a>

```csharp
private void ResetOsFamily()
```

##### `ResetPlatformArchitecture` <a name="ResetPlatformArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetPlatformArchitecture"></a>

```csharp
private void ResetPlatformArchitecture()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsAgentInstallers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsAgentInstallers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsAgentInstallers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsAgentInstallers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsAgentInstallers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciJmsAgentInstallers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsAgentInstallers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsAgentInstallers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsAgentInstallers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.agentInstallerCollection">AgentInstallerCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList">DataOciJmsAgentInstallersAgentInstallerCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList">DataOciJmsAgentInstallersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.osFamilyInput">OsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.platformArchitectureInput">PlatformArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.platformArchitecture">PlatformArchitecture</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AgentInstallerCollection`<sup>Required</sup> <a name="AgentInstallerCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.agentInstallerCollection"></a>

```csharp
public DataOciJmsAgentInstallersAgentInstallerCollectionList AgentInstallerCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList">DataOciJmsAgentInstallersAgentInstallerCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.filter"></a>

```csharp
public DataOciJmsAgentInstallersFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList">DataOciJmsAgentInstallersFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.osFamilyInput"></a>

```csharp
public string OsFamilyInput { get; }
```

- *Type:* string

---

##### `PlatformArchitectureInput`<sup>Optional</sup> <a name="PlatformArchitectureInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.platformArchitectureInput"></a>

```csharp
public string PlatformArchitectureInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `PlatformArchitecture`<sup>Required</sup> <a name="PlatformArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.platformArchitecture"></a>

```csharp
public string PlatformArchitecture { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsAgentInstallersAgentInstallerCollection <a name="DataOciJmsAgentInstallersAgentInstallerCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersAgentInstallerCollection {

};
```


### DataOciJmsAgentInstallersAgentInstallerCollectionItems <a name="DataOciJmsAgentInstallersAgentInstallerCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersAgentInstallerCollectionItems {

};
```


### DataOciJmsAgentInstallersConfig <a name="DataOciJmsAgentInstallersConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    object Filter = null,
    string FleetId = null,
    string Id = null,
    string OsFamily = null,
    string PlatformArchitecture = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#compartment_id DataOciJmsAgentInstallers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.fleetId">FleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#fleet_id DataOciJmsAgentInstallers#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#id DataOciJmsAgentInstallers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.osFamily">OsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#os_family DataOciJmsAgentInstallers#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.platformArchitecture">PlatformArchitecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#platform_architecture DataOciJmsAgentInstallers#platform_architecture}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#compartment_id DataOciJmsAgentInstallers#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#filter DataOciJmsAgentInstallers#filter}

---

##### `FleetId`<sup>Optional</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#fleet_id DataOciJmsAgentInstallers#fleet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#id DataOciJmsAgentInstallers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.osFamily"></a>

```csharp
public string OsFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#os_family DataOciJmsAgentInstallers#os_family}.

---

##### `PlatformArchitecture`<sup>Optional</sup> <a name="PlatformArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.platformArchitecture"></a>

```csharp
public string PlatformArchitecture { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#platform_architecture DataOciJmsAgentInstallers#platform_architecture}.

---

### DataOciJmsAgentInstallersFilter <a name="DataOciJmsAgentInstallersFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#name DataOciJmsAgentInstallers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#values DataOciJmsAgentInstallers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#regex DataOciJmsAgentInstallers#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#name DataOciJmsAgentInstallers#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#values DataOciJmsAgentInstallers#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#regex DataOciJmsAgentInstallers#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsAgentInstallersAgentInstallerCollectionItemsList <a name="DataOciJmsAgentInstallersAgentInstallerCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersAgentInstallerCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.get"></a>

```csharp
private DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference <a name="DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerDescription">AgentInstallerDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerId">AgentInstallerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerVersion">AgentInstallerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.approximateFileSizeInBytes">ApproximateFileSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.javaVersion">JavaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.platformArchitecture">PlatformArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems">DataOciJmsAgentInstallersAgentInstallerCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentInstallerDescription`<sup>Required</sup> <a name="AgentInstallerDescription" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerDescription"></a>

```csharp
public string AgentInstallerDescription { get; }
```

- *Type:* string

---

##### `AgentInstallerId`<sup>Required</sup> <a name="AgentInstallerId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerId"></a>

```csharp
public string AgentInstallerId { get; }
```

- *Type:* string

---

##### `AgentInstallerVersion`<sup>Required</sup> <a name="AgentInstallerVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerVersion"></a>

```csharp
public string AgentInstallerVersion { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `ApproximateFileSizeInBytes`<sup>Required</sup> <a name="ApproximateFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.approximateFileSizeInBytes"></a>

```csharp
public string ApproximateFileSizeInBytes { get; }
```

- *Type:* string

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.javaVersion"></a>

```csharp
public string JavaVersion { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

##### `PlatformArchitecture`<sup>Required</sup> <a name="PlatformArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.platformArchitecture"></a>

```csharp
public string PlatformArchitecture { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsAgentInstallersAgentInstallerCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems">DataOciJmsAgentInstallersAgentInstallerCollectionItems</a>

---


### DataOciJmsAgentInstallersAgentInstallerCollectionList <a name="DataOciJmsAgentInstallersAgentInstallerCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersAgentInstallerCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.get"></a>

```csharp
private DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference <a name="DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList">DataOciJmsAgentInstallersAgentInstallerCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection">DataOciJmsAgentInstallersAgentInstallerCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.items"></a>

```csharp
public DataOciJmsAgentInstallersAgentInstallerCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList">DataOciJmsAgentInstallersAgentInstallerCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsAgentInstallersAgentInstallerCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection">DataOciJmsAgentInstallersAgentInstallerCollection</a>

---


### DataOciJmsAgentInstallersFilterList <a name="DataOciJmsAgentInstallersFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.get"></a>

```csharp
private DataOciJmsAgentInstallersFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciJmsAgentInstallersFilterOutputReference <a name="DataOciJmsAgentInstallersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsAgentInstallersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



