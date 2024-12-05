# `dataOciMeteringComputationUsageStatementEmailRecipientsGroups` Submodule <a name="`dataOciMeteringComputationUsageStatementEmailRecipientsGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroups <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroups" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups oci_metering_computation_usage_statement_email_recipients_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroups(scope Construct, id *string, config DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig) DataOciMeteringComputationUsageStatementEmailRecipientsGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationUsageStatementEmailRecipientsGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMeteringComputationUsageStatementEmailRecipientsGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMeteringComputationUsageStatementEmailRecipientsGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMeteringComputationUsageStatementEmailRecipientsGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationUsageStatementEmailRecipientsGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.emailRecipientsGroupCollection">EmailRecipientsGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EmailRecipientsGroupCollection`<sup>Required</sup> <a name="EmailRecipientsGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.emailRecipientsGroupCollection"></a>

```go
func EmailRecipientsGroupCollection() DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.filter"></a>

```go
func Filter() DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

&dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	SubscriptionId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#compartment_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#subscription_id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#subscription_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#filter DataOciMeteringComputationUsageStatementEmailRecipientsGroups#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#id DataOciMeteringComputationUsageStatementEmailRecipientsGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

&dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection {

}
```


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

&dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems {

}
```


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

&dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct {

}
```


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

&dataocimeteringcomputationusagestatementemailrecipientsgroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#name DataOciMeteringComputationUsageStatementEmailRecipientsGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#values DataOciMeteringComputationUsageStatementEmailRecipientsGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#regex DataOciMeteringComputationUsageStatementEmailRecipientsGroups#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#name DataOciMeteringComputationUsageStatementEmailRecipientsGroups#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#values DataOciMeteringComputationUsageStatementEmailRecipientsGroups#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_statement_email_recipients_groups#regex DataOciMeteringComputationUsageStatementEmailRecipientsGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.emailRecipientsGroupId">EmailRecipientsGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.recipientsList">RecipientsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `EmailRecipientsGroupId`<sup>Required</sup> <a name="EmailRecipientsGroupId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.emailRecipientsGroupId"></a>

```go
func EmailRecipientsGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RecipientsList`<sup>Required</sup> <a name="RecipientsList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.recipientsList"></a>

```go
func RecipientsList() DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItems</a>

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.get"></a>

```go
func Get(index *f64) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.emailId">EmailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailId`<sup>Required</sup> <a name="EmailId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.emailId"></a>

```go
func EmailId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsRecipientsListStruct</a>

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.get"></a>

```go
func Get(index *f64) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.items"></a>

```go
func Items() DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection">DataOciMeteringComputationUsageStatementEmailRecipientsGroupsEmailRecipientsGroupCollection</a>

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.get"></a>

```go
func Get(index *f64) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference <a name="DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimeteringcomputationusagestatementemailrecipientsgroups"

dataocimeteringcomputationusagestatementemailrecipientsgroups.NewDataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageStatementEmailRecipientsGroups.DataOciMeteringComputationUsageStatementEmailRecipientsGroupsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



