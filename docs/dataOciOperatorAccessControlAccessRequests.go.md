# `dataOciOperatorAccessControlAccessRequests` Submodule <a name="`dataOciOperatorAccessControlAccessRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequests <a name="DataOciOperatorAccessControlAccessRequests" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests oci_operator_access_control_access_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequests(scope Construct, id *string, config DataOciOperatorAccessControlAccessRequestsConfig) DataOciOperatorAccessControlAccessRequests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig">DataOciOperatorAccessControlAccessRequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig">DataOciOperatorAccessControlAccessRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceName` <a name="ResetResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceName"></a>

```go
func ResetResourceName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeEnd"></a>

```go
func ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeStart"></a>

```go
func ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequests_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOperatorAccessControlAccessRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.accessRequestCollection">AccessRequestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList">DataOciOperatorAccessControlAccessRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEndInput">TimeEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessRequestCollection`<sup>Required</sup> <a name="AccessRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.accessRequestCollection"></a>

```go
func AccessRequestCollection() DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filter"></a>

```go
func Filter() DataOciOperatorAccessControlAccessRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList">DataOciOperatorAccessControlAccessRequestsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEndInput"></a>

```go
func TimeEndInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestsAccessRequestCollection <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

&dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection {

}
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

&dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems {

}
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

&dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails {

}
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

&dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails {

}
```


### DataOciOperatorAccessControlAccessRequestsConfig <a name="DataOciOperatorAccessControlAccessRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

&dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequestsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	ResourceName: *string,
	ResourceType: *string,
	State: *string,
	TimeEnd: *string,
	TimeStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceName">ResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#filter DataOciOperatorAccessControlAccessRequests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeEnd"></a>

```go
TimeEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}.

---

### DataOciOperatorAccessControlAccessRequestsFilter <a name="DataOciOperatorAccessControlAccessRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

&dataocioperatoraccesscontrolaccessrequests.DataOciOperatorAccessControlAccessRequestsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAction">ApprovalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAdditionalMessage">ApprovalAdditionalMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalComment">ApprovalComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approverId">ApproverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeApprovedForAccess">TimeApprovedForAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeOfAuthorization">TimeOfAuthorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalAction`<sup>Required</sup> <a name="ApprovalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAction"></a>

```go
func ApprovalAction() *string
```

- *Type:* *string

---

##### `ApprovalAdditionalMessage`<sup>Required</sup> <a name="ApprovalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```go
func ApprovalAdditionalMessage() *string
```

- *Type:* *string

---

##### `ApprovalComment`<sup>Required</sup> <a name="ApprovalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalComment"></a>

```go
func ApprovalComment() *string
```

- *Type:* *string

---

##### `ApproverId`<sup>Required</sup> <a name="ApproverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approverId"></a>

```go
func ApproverId() *string
```

- *Type:* *string

---

##### `TimeApprovedForAccess`<sup>Required</sup> <a name="TimeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```go
func TimeApprovedForAccess() *string
```

- *Type:* *string

---

##### `TimeOfAuthorization`<sup>Required</sup> <a name="TimeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```go
func TimeOfAuthorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAction">ApprovalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage">ApprovalAdditionalMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalComment">ApprovalComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approverId">ApproverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeApprovedForAccess">TimeApprovedForAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeOfAuthorization">TimeOfAuthorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalAction`<sup>Required</sup> <a name="ApprovalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAction"></a>

```go
func ApprovalAction() *string
```

- *Type:* *string

---

##### `ApprovalAdditionalMessage`<sup>Required</sup> <a name="ApprovalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```go
func ApprovalAdditionalMessage() *string
```

- *Type:* *string

---

##### `ApprovalComment`<sup>Required</sup> <a name="ApprovalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalComment"></a>

```go
func ApprovalComment() *string
```

- *Type:* *string

---

##### `ApproverId`<sup>Required</sup> <a name="ApproverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approverId"></a>

```go
func ApproverId() *string
```

- *Type:* *string

---

##### `TimeApprovedForAccess`<sup>Required</sup> <a name="TimeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```go
func TimeApprovedForAccess() *string
```

- *Type:* *string

---

##### `TimeOfAuthorization`<sup>Required</sup> <a name="TimeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```go
func TimeOfAuthorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.accessReasonSummary">AccessReasonSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.actionRequestsList">ActionRequestsList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverComment">ApproverComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverDetails">ApproverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.auditType">AuditType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.closureComment">ClosureComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extendDuration">ExtendDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extensionApproverDetails">ExtensionApproverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isAutoApproved">IsAutoApproved</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isValidateAssignment">IsValidateAssignment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApprovers">NumberOfApprovers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApproversRequired">NumberOfApproversRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfExtensionApprovers">NumberOfExtensionApprovers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlAdditionalMessage">OpctlAdditionalMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlId">OpctlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlName">OpctlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.operatorId">OperatorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.requestId">RequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.subResourceList">SubResourceList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.systemMessage">SystemMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfCreation">TimeOfCreation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfModification">TimeOfModification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfUserCreation">TimeOfUserCreation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeRequestedForFutureAccess">TimeRequestedForFutureAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.workflowId">WorkflowId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessReasonSummary`<sup>Required</sup> <a name="AccessReasonSummary" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.accessReasonSummary"></a>

```go
func AccessReasonSummary() *string
```

- *Type:* *string

---

##### `ActionRequestsList`<sup>Required</sup> <a name="ActionRequestsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.actionRequestsList"></a>

```go
func ActionRequestsList() *[]*string
```

- *Type:* *[]*string

---

##### `ApproverComment`<sup>Required</sup> <a name="ApproverComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverComment"></a>

```go
func ApproverComment() *string
```

- *Type:* *string

---

##### `ApproverDetails`<sup>Required</sup> <a name="ApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverDetails"></a>

```go
func ApproverDetails() DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList</a>

---

##### `AuditType`<sup>Required</sup> <a name="AuditType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.auditType"></a>

```go
func AuditType() *[]*string
```

- *Type:* *[]*string

---

##### `ClosureComment`<sup>Required</sup> <a name="ClosureComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.closureComment"></a>

```go
func ClosureComment() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `ExtendDuration`<sup>Required</sup> <a name="ExtendDuration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extendDuration"></a>

```go
func ExtendDuration() *f64
```

- *Type:* *f64

---

##### `ExtensionApproverDetails`<sup>Required</sup> <a name="ExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extensionApproverDetails"></a>

```go
func ExtensionApproverDetails() DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoApproved`<sup>Required</sup> <a name="IsAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isAutoApproved"></a>

```go
func IsAutoApproved() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsValidateAssignment`<sup>Required</sup> <a name="IsValidateAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isValidateAssignment"></a>

```go
func IsValidateAssignment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NumberOfApprovers`<sup>Required</sup> <a name="NumberOfApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApprovers"></a>

```go
func NumberOfApprovers() *f64
```

- *Type:* *f64

---

##### `NumberOfApproversRequired`<sup>Required</sup> <a name="NumberOfApproversRequired" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApproversRequired"></a>

```go
func NumberOfApproversRequired() *f64
```

- *Type:* *f64

---

##### `NumberOfExtensionApprovers`<sup>Required</sup> <a name="NumberOfExtensionApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfExtensionApprovers"></a>

```go
func NumberOfExtensionApprovers() *f64
```

- *Type:* *f64

---

##### `OpctlAdditionalMessage`<sup>Required</sup> <a name="OpctlAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlAdditionalMessage"></a>

```go
func OpctlAdditionalMessage() *string
```

- *Type:* *string

---

##### `OpctlId`<sup>Required</sup> <a name="OpctlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlId"></a>

```go
func OpctlId() *string
```

- *Type:* *string

---

##### `OpctlName`<sup>Required</sup> <a name="OpctlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlName"></a>

```go
func OpctlName() *string
```

- *Type:* *string

---

##### `OperatorId`<sup>Required</sup> <a name="OperatorId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.operatorId"></a>

```go
func OperatorId() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.requestId"></a>

```go
func RequestId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubResourceList`<sup>Required</sup> <a name="SubResourceList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.subResourceList"></a>

```go
func SubResourceList() *[]*string
```

- *Type:* *[]*string

---

##### `SystemMessage`<sup>Required</sup> <a name="SystemMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.systemMessage"></a>

```go
func SystemMessage() *string
```

- *Type:* *string

---

##### `TimeOfCreation`<sup>Required</sup> <a name="TimeOfCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfCreation"></a>

```go
func TimeOfCreation() *string
```

- *Type:* *string

---

##### `TimeOfModification`<sup>Required</sup> <a name="TimeOfModification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfModification"></a>

```go
func TimeOfModification() *string
```

- *Type:* *string

---

##### `TimeOfUserCreation`<sup>Required</sup> <a name="TimeOfUserCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfUserCreation"></a>

```go
func TimeOfUserCreation() *string
```

- *Type:* *string

---

##### `TimeRequestedForFutureAccess`<sup>Required</sup> <a name="TimeRequestedForFutureAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeRequestedForFutureAccess"></a>

```go
func TimeRequestedForFutureAccess() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.workflowId"></a>

```go
func WorkflowId() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection">DataOciOperatorAccessControlAccessRequestsAccessRequestCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOperatorAccessControlAccessRequestsAccessRequestCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection">DataOciOperatorAccessControlAccessRequestsAccessRequestCollection</a>

---


### DataOciOperatorAccessControlAccessRequestsFilterList <a name="DataOciOperatorAccessControlAccessRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlAccessRequestsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlAccessRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOperatorAccessControlAccessRequestsFilterOutputReference <a name="DataOciOperatorAccessControlAccessRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequests"

dataocioperatoraccesscontrolaccessrequests.NewDataOciOperatorAccessControlAccessRequestsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlAccessRequestsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



