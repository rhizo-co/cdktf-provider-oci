# `dataOciManagementAgentManagementAgentAvailableHistories` Submodule <a name="`dataOciManagementAgentManagementAgentAvailableHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentAvailableHistories <a name="DataOciManagementAgentManagementAgentAvailableHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories oci_management_agent_management_agent_available_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.NewDataOciManagementAgentManagementAgentAvailableHistories(scope Construct, id *string, config DataOciManagementAgentManagementAgentAvailableHistoriesConfig) DataOciManagementAgentManagementAgentAvailableHistories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig">DataOciManagementAgentManagementAgentAvailableHistoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig">DataOciManagementAgentManagementAgentAvailableHistoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan">ResetTimeAvailabilityStatusEndedGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan">ResetTimeAvailabilityStatusStartedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeAvailabilityStatusEndedGreaterThan` <a name="ResetTimeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan"></a>

```go
func ResetTimeAvailabilityStatusEndedGreaterThan()
```

##### `ResetTimeAvailabilityStatusStartedLessThan` <a name="ResetTimeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan"></a>

```go
func ResetTimeAvailabilityStatusStartedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.DataOciManagementAgentManagementAgentAvailableHistories_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.DataOciManagementAgentManagementAgentAvailableHistories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.DataOciManagementAgentManagementAgentAvailableHistories_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.DataOciManagementAgentManagementAgentAvailableHistories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentAvailableHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciManagementAgentManagementAgentAvailableHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentAvailableHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories">AvailabilityHistories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput">TimeAvailabilityStatusEndedGreaterThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput">TimeAvailabilityStatusStartedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan">TimeAvailabilityStatusEndedGreaterThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan">TimeAvailabilityStatusStartedLessThan</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityHistories`<sup>Required</sup> <a name="AvailabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories"></a>

```go
func AvailabilityHistories() DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter"></a>

```go
func Filter() DataOciManagementAgentManagementAgentAvailableHistoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput"></a>

```go
func ManagementAgentIdInput() *string
```

- *Type:* *string

---

##### `TimeAvailabilityStatusEndedGreaterThanInput`<sup>Optional</sup> <a name="TimeAvailabilityStatusEndedGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput"></a>

```go
func TimeAvailabilityStatusEndedGreaterThanInput() *string
```

- *Type:* *string

---

##### `TimeAvailabilityStatusStartedLessThanInput`<sup>Optional</sup> <a name="TimeAvailabilityStatusStartedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput"></a>

```go
func TimeAvailabilityStatusStartedLessThanInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `TimeAvailabilityStatusEndedGreaterThan`<sup>Required</sup> <a name="TimeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan"></a>

```go
func TimeAvailabilityStatusEndedGreaterThan() *string
```

- *Type:* *string

---

##### `TimeAvailabilityStatusStartedLessThan`<sup>Required</sup> <a name="TimeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan"></a>

```go
func TimeAvailabilityStatusStartedLessThan() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

&dataocimanagementagentmanagementagentavailablehistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories {

}
```


### DataOciManagementAgentManagementAgentAvailableHistoriesConfig <a name="DataOciManagementAgentManagementAgentAvailableHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

&dataocimanagementagentmanagementagentavailablehistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagementAgentId: *string,
	Filter: interface{},
	Id: *string,
	TimeAvailabilityStatusEndedGreaterThan: *string,
	TimeAvailabilityStatusStartedLessThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan">TimeAvailabilityStatusEndedGreaterThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan">TimeAvailabilityStatusStartedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId"></a>

```go
ManagementAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#filter DataOciManagementAgentManagementAgentAvailableHistories#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeAvailabilityStatusEndedGreaterThan`<sup>Optional</sup> <a name="TimeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan"></a>

```go
TimeAvailabilityStatusEndedGreaterThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}.

---

##### `TimeAvailabilityStatusStartedLessThan`<sup>Optional</sup> <a name="TimeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan"></a>

```go
TimeAvailabilityStatusStartedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}.

---

### DataOciManagementAgentManagementAgentAvailableHistoriesFilter <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

&dataocimanagementagentmanagementagentavailablehistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.NewDataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get"></a>

```go
func Get(index *f64) DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.NewDataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded">TimeAvailabilityStatusEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted">TimeAvailabilityStatusStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `TimeAvailabilityStatusEnded`<sup>Required</sup> <a name="TimeAvailabilityStatusEnded" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded"></a>

```go
func TimeAvailabilityStatusEnded() *string
```

- *Type:* *string

---

##### `TimeAvailabilityStatusStarted`<sup>Required</sup> <a name="TimeAvailabilityStatusStarted" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted"></a>

```go
func TimeAvailabilityStatusStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a>

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.NewDataOciManagementAgentManagementAgentAvailableHistoriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciManagementAgentManagementAgentAvailableHistoriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get"></a>

```go
func Get(index *f64) DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentavailablehistories"

dataocimanagementagentmanagementagentavailablehistories.NewDataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



