# `dataOciPsqlConfigurations` Submodule <a name="`dataOciPsqlConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlConfigurations <a name="DataOciPsqlConfigurations" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations oci_psql_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurations(Construct Scope, string Id, DataOciPsqlConfigurationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig">DataOciPsqlConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig">DataOciPsqlConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetConfigurationId"></a>

```csharp
private void ResetConfigurationId()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetDbVersion"></a>

```csharp
private void ResetDbVersion()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetShape"></a>

```csharp
private void ResetShape()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciPsqlConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciPsqlConfigurations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciPsqlConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciPsqlConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationCollection">ConfigurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList">DataOciPsqlConfigurationsConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList">DataOciPsqlConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ConfigurationCollection`<sup>Required</sup> <a name="ConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationCollection"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionList ConfigurationCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList">DataOciPsqlConfigurationsConfigurationCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.filter"></a>

```csharp
public DataOciPsqlConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList">DataOciPsqlConfigurationsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlConfigurationsConfig <a name="DataOciPsqlConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string ConfigurationId = null,
    string DbVersion = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string Shape = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#compartment_id DataOciPsqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#configuration_id DataOciPsqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.dbVersion">DbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#db_version DataOciPsqlConfigurations#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#display_name DataOciPsqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#id DataOciPsqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#shape DataOciPsqlConfigurations#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#state DataOciPsqlConfigurations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#compartment_id DataOciPsqlConfigurations#compartment_id}.

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#configuration_id DataOciPsqlConfigurations#configuration_id}.

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#db_version DataOciPsqlConfigurations#db_version}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#display_name DataOciPsqlConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#filter DataOciPsqlConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#id DataOciPsqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#shape DataOciPsqlConfigurations#shape}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#state DataOciPsqlConfigurations#state}.

---

### DataOciPsqlConfigurationsConfigurationCollection <a name="DataOciPsqlConfigurationsConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollection {

};
```


### DataOciPsqlConfigurationsConfigurationCollectionItems <a name="DataOciPsqlConfigurationsConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItems {

};
```


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails {

};
```


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems {

};
```


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides {

};
```


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems {

};
```


### DataOciPsqlConfigurationsFilter <a name="DataOciPsqlConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#name DataOciPsqlConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#values DataOciPsqlConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#regex DataOciPsqlConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#name DataOciPsqlConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#values DataOciPsqlConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#regex DataOciPsqlConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.get"></a>

```csharp
private DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey">ConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue">DefaultConfigValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable">IsOverridable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired">IsRestartRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.overridenConfigValue">OverridenConfigValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues"></a>

```csharp
public string AllowedValues { get; }
```

- *Type:* string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey"></a>

```csharp
public string ConfigKey { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DefaultConfigValue`<sup>Required</sup> <a name="DefaultConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue"></a>

```csharp
public string DefaultConfigValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IsOverridable`<sup>Required</sup> <a name="IsOverridable" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable"></a>

```csharp
public IResolvable IsOverridable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRestartRequired`<sup>Required</sup> <a name="IsRestartRequired" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired"></a>

```csharp
public IResolvable IsRestartRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OverridenConfigValue`<sup>Required</sup> <a name="OverridenConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.overridenConfigValue"></a>

```csharp
public string OverridenConfigValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.get"></a>

```csharp
private DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.get"></a>

```csharp
private DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.configKey">ConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.overridenConfigValue">OverridenConfigValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.configKey"></a>

```csharp
public string ConfigKey { get; }
```

- *Type:* string

---

##### `OverridenConfigValue`<sup>Required</sup> <a name="OverridenConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.overridenConfigValue"></a>

```csharp
public string OverridenConfigValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.get"></a>

```csharp
private DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.items"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.get"></a>

```csharp
private DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.configurationDetails">ConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.dbConfigurationOverrides">DbConfigurationOverrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs">InstanceMemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.instanceOcpuCount">InstanceOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.isFlexible">IsFlexible</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItems">DataOciPsqlConfigurationsConfigurationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `ConfigurationDetails`<sup>Required</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.configurationDetails"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList ConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList</a>

---

##### `DbConfigurationOverrides`<sup>Required</sup> <a name="DbConfigurationOverrides" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.dbConfigurationOverrides"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList DbConfigurationOverrides { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList</a>

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceMemorySizeInGbs`<sup>Required</sup> <a name="InstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```csharp
public double InstanceMemorySizeInGbs { get; }
```

- *Type:* double

---

##### `InstanceOcpuCount`<sup>Required</sup> <a name="InstanceOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```csharp
public double InstanceOcpuCount { get; }
```

- *Type:* double

---

##### `IsFlexible`<sup>Required</sup> <a name="IsFlexible" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.isFlexible"></a>

```csharp
public IResolvable IsFlexible { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItems">DataOciPsqlConfigurationsConfigurationCollectionItems</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionList <a name="DataOciPsqlConfigurationsConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.get"></a>

```csharp
private DataOciPsqlConfigurationsConfigurationCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciPsqlConfigurationsConfigurationCollectionOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsConfigurationCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollection">DataOciPsqlConfigurationsConfigurationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.items"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciPsqlConfigurationsConfigurationCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollection">DataOciPsqlConfigurationsConfigurationCollection</a>

---


### DataOciPsqlConfigurationsFilterList <a name="DataOciPsqlConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.get"></a>

```csharp
private DataOciPsqlConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciPsqlConfigurationsFilterOutputReference <a name="DataOciPsqlConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciPsqlConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



