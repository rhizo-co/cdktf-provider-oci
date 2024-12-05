# `dataOciLoggingUnifiedAgentConfigurations` Submodule <a name="`dataOciLoggingUnifiedAgentConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoggingUnifiedAgentConfigurations <a name="DataOciLoggingUnifiedAgentConfigurations" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations oci_logging_unified_agent_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.NewDataOciLoggingUnifiedAgentConfigurations(scope Construct, id *string, config DataOciLoggingUnifiedAgentConfigurationsConfig) DataOciLoggingUnifiedAgentConfigurations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig">DataOciLoggingUnifiedAgentConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig">DataOciLoggingUnifiedAgentConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetIsCompartmentIdInSubtree">ResetIsCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetLogId">ResetLogId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGroupId` <a name="ResetGroupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCompartmentIdInSubtree` <a name="ResetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetIsCompartmentIdInSubtree"></a>

```go
func ResetIsCompartmentIdInSubtree()
```

##### `ResetLogId` <a name="ResetLogId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetLogId"></a>

```go
func ResetLogId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.DataOciLoggingUnifiedAgentConfigurations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.DataOciLoggingUnifiedAgentConfigurations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.DataOciLoggingUnifiedAgentConfigurations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.DataOciLoggingUnifiedAgentConfigurations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLoggingUnifiedAgentConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLoggingUnifiedAgentConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoggingUnifiedAgentConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList">DataOciLoggingUnifiedAgentConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.unifiedAgentConfigurationCollection">UnifiedAgentConfigurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtreeInput">IsCompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logIdInput">LogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logId">LogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filter"></a>

```go
func Filter() DataOciLoggingUnifiedAgentConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList">DataOciLoggingUnifiedAgentConfigurationsFilterList</a>

---

##### `UnifiedAgentConfigurationCollection`<sup>Required</sup> <a name="UnifiedAgentConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.unifiedAgentConfigurationCollection"></a>

```go
func UnifiedAgentConfigurationCollection() DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="IsCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtreeInput"></a>

```go
func IsCompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logIdInput"></a>

```go
func LogIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCompartmentIdInSubtree`<sup>Required</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtree"></a>

```go
func IsCompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logId"></a>

```go
func LogId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoggingUnifiedAgentConfigurationsConfig <a name="DataOciLoggingUnifiedAgentConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

&dataociloggingunifiedagentconfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	GroupId: *string,
	Id: *string,
	IsCompartmentIdInSubtree: interface{},
	LogId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.logId">LogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#filter DataOciLoggingUnifiedAgentConfigurations#filter}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompartmentIdInSubtree`<sup>Optional</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.isCompartmentIdInSubtree"></a>

```go
IsCompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}.

---

##### `LogId`<sup>Optional</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.logId"></a>

```go
LogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}.

---

### DataOciLoggingUnifiedAgentConfigurationsFilter <a name="DataOciLoggingUnifiedAgentConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

&dataociloggingunifiedagentconfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}.

---

### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

&dataociloggingunifiedagentconfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection {

}
```


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

&dataociloggingunifiedagentconfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoggingUnifiedAgentConfigurationsFilterList <a name="DataOciLoggingUnifiedAgentConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.NewDataOciLoggingUnifiedAgentConfigurationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoggingUnifiedAgentConfigurationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get"></a>

```go
func Get(index *f64) DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.NewDataOciLoggingUnifiedAgentConfigurationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.NewDataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.NewDataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationState">ConfigurationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationType">ConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeLastModified">TimeLastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationState"></a>

```go
func ConfigurationState() *string
```

- *Type:* *string

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationType"></a>

```go
func ConfigurationType() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastModified`<sup>Required</sup> <a name="TimeLastModified" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeLastModified"></a>

```go
func TimeLastModified() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems</a>

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.NewDataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get"></a>

```go
func Get(index *f64) DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloggingunifiedagentconfigurations"

dataociloggingunifiedagentconfigurations.NewDataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.items"></a>

```go
func Items() DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection</a>

---



