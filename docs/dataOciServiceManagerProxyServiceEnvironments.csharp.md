# `dataOciServiceManagerProxyServiceEnvironments` Submodule <a name="`dataOciServiceManagerProxyServiceEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceManagerProxyServiceEnvironments <a name="DataOciServiceManagerProxyServiceEnvironments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments oci_service_manager_proxy_service_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironments(Construct Scope, string Id, DataOciServiceManagerProxyServiceEnvironmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig">DataOciServiceManagerProxyServiceEnvironmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig">DataOciServiceManagerProxyServiceEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentId">ResetServiceEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentType">ResetServiceEnvironmentType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServiceEnvironmentId` <a name="ResetServiceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentId"></a>

```csharp
private void ResetServiceEnvironmentId()
```

##### `ResetServiceEnvironmentType` <a name="ResetServiceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentType"></a>

```csharp
private void ResetServiceEnvironmentType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceManagerProxyServiceEnvironments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceManagerProxyServiceEnvironments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceManagerProxyServiceEnvironments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceManagerProxyServiceEnvironments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceManagerProxyServiceEnvironments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceManagerProxyServiceEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceManagerProxyServiceEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList">DataOciServiceManagerProxyServiceEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentCollection">ServiceEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentIdInput">ServiceEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentTypeInput">ServiceEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentId">ServiceEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentType">ServiceEnvironmentType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filter"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList">DataOciServiceManagerProxyServiceEnvironmentsFilterList</a>

---

##### `ServiceEnvironmentCollection`<sup>Required</sup> <a name="ServiceEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentCollection"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList ServiceEnvironmentCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceEnvironmentIdInput`<sup>Optional</sup> <a name="ServiceEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentIdInput"></a>

```csharp
public string ServiceEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `ServiceEnvironmentTypeInput`<sup>Optional</sup> <a name="ServiceEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentTypeInput"></a>

```csharp
public string ServiceEnvironmentTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceEnvironmentId`<sup>Required</sup> <a name="ServiceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentId"></a>

```csharp
public string ServiceEnvironmentId { get; }
```

- *Type:* string

---

##### `ServiceEnvironmentType`<sup>Required</sup> <a name="ServiceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentType"></a>

```csharp
public string ServiceEnvironmentType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceManagerProxyServiceEnvironmentsConfig <a name="DataOciServiceManagerProxyServiceEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsConfig {
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
    string ServiceEnvironmentId = null,
    string ServiceEnvironmentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentId">ServiceEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentType">ServiceEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#filter DataOciServiceManagerProxyServiceEnvironments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceEnvironmentId`<sup>Optional</sup> <a name="ServiceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentId"></a>

```csharp
public string ServiceEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}.

---

##### `ServiceEnvironmentType`<sup>Optional</sup> <a name="ServiceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentType"></a>

```csharp
public string ServiceEnvironmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}.

---

### DataOciServiceManagerProxyServiceEnvironmentsFilter <a name="DataOciServiceManagerProxyServiceEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#name DataOciServiceManagerProxyServiceEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#values DataOciServiceManagerProxyServiceEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#regex DataOciServiceManagerProxyServiceEnvironments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#name DataOciServiceManagerProxyServiceEnvironments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#values DataOciServiceManagerProxyServiceEnvironments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#regex DataOciServiceManagerProxyServiceEnvironments#regex}.

---

### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection {

};
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems {

};
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition {

};
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceManagerProxyServiceEnvironmentsFilterList <a name="DataOciServiceManagerProxyServiceEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get"></a>

```csharp
private DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get"></a>

```csharp
private DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.consoleUrl">ConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceDefinition">ServiceDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceEnvironmentEndpoints">ServiceEnvironmentEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.consoleUrl"></a>

```csharp
public string ConsoleUrl { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceDefinition`<sup>Required</sup> <a name="ServiceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceDefinition"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList ServiceDefinition { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList</a>

---

##### `ServiceEnvironmentEndpoints`<sup>Required</sup> <a name="ServiceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceEnvironmentEndpoints"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList ServiceEnvironmentEndpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get"></a>

```csharp
private DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.shortDisplayName">ShortDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ShortDisplayName`<sup>Required</sup> <a name="ShortDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.shortDisplayName"></a>

```csharp
public string ShortDisplayName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get"></a>

```csharp
private DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.environmentType">EnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.environmentType"></a>

```csharp
public string EnvironmentType { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get"></a>

```csharp
private DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.items"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection</a>

---



