# `dataOciWaaWebAppAccelerationPolicies` Submodule <a name="`dataOciWaaWebAppAccelerationPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaaWebAppAccelerationPolicies <a name="DataOciWaaWebAppAccelerationPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies oci_waa_web_app_acceleration_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPolicies(Construct Scope, string Id, DataOciWaaWebAppAccelerationPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig">DataOciWaaWebAppAccelerationPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig">DataOciWaaWebAppAccelerationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaaWebAppAccelerationPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaaWebAppAccelerationPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaaWebAppAccelerationPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaaWebAppAccelerationPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWaaWebAppAccelerationPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWaaWebAppAccelerationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaaWebAppAccelerationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList">DataOciWaaWebAppAccelerationPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.webAppAccelerationPolicyCollection">WebAppAccelerationPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.stateInput">StateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.state">State</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filter"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList">DataOciWaaWebAppAccelerationPoliciesFilterList</a>

---

##### `WebAppAccelerationPolicyCollection`<sup>Required</sup> <a name="WebAppAccelerationPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.webAppAccelerationPolicyCollection"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList WebAppAccelerationPolicyCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.stateInput"></a>

```csharp
public string[] StateInput { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.state"></a>

```csharp
public string[] State { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaaWebAppAccelerationPoliciesConfig <a name="DataOciWaaWebAppAccelerationPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string[] State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.state">State</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#filter DataOciWaaWebAppAccelerationPolicies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.state"></a>

```csharp
public string[] State { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}.

---

### DataOciWaaWebAppAccelerationPoliciesFilter <a name="DataOciWaaWebAppAccelerationPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#name DataOciWaaWebAppAccelerationPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#values DataOciWaaWebAppAccelerationPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#regex DataOciWaaWebAppAccelerationPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#name DataOciWaaWebAppAccelerationPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#values DataOciWaaWebAppAccelerationPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#regex DataOciWaaWebAppAccelerationPolicies#regex}.

---

### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection {

};
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems {

};
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy {

};
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy {

};
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaaWebAppAccelerationPoliciesFilterList <a name="DataOciWaaWebAppAccelerationPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get"></a>

```csharp
private DataOciWaaWebAppAccelerationPoliciesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciWaaWebAppAccelerationPoliciesFilterOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get"></a>

```csharp
private DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCachingPolicy">ResponseCachingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCompressionPolicy">ResponseCompressionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ResponseCachingPolicy`<sup>Required</sup> <a name="ResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCachingPolicy"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList ResponseCachingPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList</a>

---

##### `ResponseCompressionPolicy`<sup>Required</sup> <a name="ResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCompressionPolicy"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList ResponseCompressionPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get"></a>

```csharp
private DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">IsResponseHeaderBasedCachingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsResponseHeaderBasedCachingEnabled`<sup>Required</sup> <a name="IsResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```csharp
public IResolvable IsResponseHeaderBasedCachingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get"></a>

```csharp
private DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get"></a>

```csharp
private DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.gzipCompression">GzipCompression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GzipCompression`<sup>Required</sup> <a name="GzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList GzipCompression { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get"></a>

```csharp
private DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.items"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection</a>

---



