# `dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates` Submodule <a name="`dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states oci_data_safe_security_policy_deployment_security_policy_entry_states}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates(scope Construct, id *string, config DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetDeploymentStatus">ResetDeploymentStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetSecurityPolicyEntryId">ResetSecurityPolicyEntryId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeploymentStatus` <a name="ResetDeploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetDeploymentStatus"></a>

```go
func ResetDeploymentStatus()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetId"></a>

```go
func ResetId()
```

##### `ResetSecurityPolicyEntryId` <a name="ResetSecurityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetSecurityPolicyEntryId"></a>

```go
func ResetSecurityPolicyEntryId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryStateCollection">SecurityPolicyEntryStateCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatusInput">DeploymentStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentIdInput">SecurityPolicyDeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryIdInput">SecurityPolicyEntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatus">DeploymentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryId">SecurityPolicyEntryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filter"></a>

```go
func Filter() DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList</a>

---

##### `SecurityPolicyEntryStateCollection`<sup>Required</sup> <a name="SecurityPolicyEntryStateCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryStateCollection"></a>

```go
func SecurityPolicyEntryStateCollection() DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList</a>

---

##### `DeploymentStatusInput`<sup>Optional</sup> <a name="DeploymentStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatusInput"></a>

```go
func DeploymentStatusInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyDeploymentIdInput`<sup>Optional</sup> <a name="SecurityPolicyDeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentIdInput"></a>

```go
func SecurityPolicyDeploymentIdInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyEntryIdInput`<sup>Optional</sup> <a name="SecurityPolicyEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryIdInput"></a>

```go
func SecurityPolicyEntryIdInput() *string
```

- *Type:* *string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatus"></a>

```go
func DeploymentStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityPolicyDeploymentId`<sup>Required</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentId"></a>

```go
func SecurityPolicyDeploymentId() *string
```

- *Type:* *string

---

##### `SecurityPolicyEntryId`<sup>Required</sup> <a name="SecurityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryId"></a>

```go
func SecurityPolicyEntryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

&dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityPolicyDeploymentId: *string,
	DeploymentStatus: *string,
	Filter: interface{},
	Id: *string,
	SecurityPolicyEntryId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.deploymentStatus">DeploymentStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyEntryId">SecurityPolicyEntryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityPolicyDeploymentId`<sup>Required</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyDeploymentId"></a>

```go
SecurityPolicyDeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}.

---

##### `DeploymentStatus`<sup>Optional</sup> <a name="DeploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.deploymentStatus"></a>

```go
DeploymentStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#filter DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityPolicyEntryId`<sup>Optional</sup> <a name="SecurityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyEntryId"></a>

```go
SecurityPolicyEntryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}.

---

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

&dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#name DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#values DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#regex DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#name DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#values DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#regex DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#regex}.

---

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

&dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection {

}
```


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

&dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems {

}
```


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

&dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.entryType">EntryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeGenerated">TimeGenerated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntryType`<sup>Required</sup> <a name="EntryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.entryType"></a>

```go
func EntryType() *string
```

- *Type:* *string

---

##### `TimeGenerated`<sup>Required</sup> <a name="TimeGenerated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeGenerated"></a>

```go
func TimeGenerated() *string
```

- *Type:* *string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeStatusUpdated"></a>

```go
func TimeStatusUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails</a>

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.deploymentStatus">DeploymentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.entryDetails">EntryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyEntryId">SecurityPolicyEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.deploymentStatus"></a>

```go
func DeploymentStatus() *string
```

- *Type:* *string

---

##### `EntryDetails`<sup>Required</sup> <a name="EntryDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.entryDetails"></a>

```go
func EntryDetails() DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityPolicyDeploymentId`<sup>Required</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyDeploymentId"></a>

```go
func SecurityPolicyDeploymentId() *string
```

- *Type:* *string

---

##### `SecurityPolicyEntryId`<sup>Required</sup> <a name="SecurityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyEntryId"></a>

```go
func SecurityPolicyEntryId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates"

dataocidatasafesecuritypolicydeploymentsecuritypolicyentrystates.NewDataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection</a>

---



