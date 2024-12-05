# `dataOciDataSafeSqlFirewallPolicyAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallPolicyAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallPolicyAnalytics <a name="DataOciDataSafeSqlFirewallPolicyAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics oci_data_safe_sql_firewall_policy_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalytics(scope Construct, id *string, config DataOciDataSafeSqlFirewallPolicyAnalyticsConfig) DataOciDataSafeSqlFirewallPolicyAnalytics
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig">DataOciDataSafeSqlFirewallPolicyAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig">DataOciDataSafeSqlFirewallPolicyAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetSecurityPolicyId">ResetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeEnded">ResetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeStarted">ResetTimeStarted</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetId"></a>

```go
func ResetId()
```

##### `ResetSecurityPolicyId` <a name="ResetSecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetSecurityPolicyId"></a>

```go
func ResetSecurityPolicyId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeEnded` <a name="ResetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeEnded"></a>

```go
func ResetTimeEnded()
```

##### `ResetTimeStarted` <a name="ResetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.resetTimeStarted"></a>

```go
func ResetTimeStarted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicyAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalytics_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalytics_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalytics_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalytics_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicyAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallPolicyAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSqlFirewallPolicyAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallPolicyAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList">DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.sqlFirewallPolicyAnalyticsCollection">SqlFirewallPolicyAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyIdInput">SecurityPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEndedInput">TimeEndedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStartedInput">TimeStartedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyId">SecurityPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filter"></a>

```go
func Filter() DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList">DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList</a>

---

##### `SqlFirewallPolicyAnalyticsCollection`<sup>Required</sup> <a name="SqlFirewallPolicyAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.sqlFirewallPolicyAnalyticsCollection"></a>

```go
func SqlFirewallPolicyAnalyticsCollection() DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupByInput"></a>

```go
func GroupByInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyIdInput`<sup>Optional</sup> <a name="SecurityPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyIdInput"></a>

```go
func SecurityPolicyIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeEndedInput`<sup>Optional</sup> <a name="TimeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEndedInput"></a>

```go
func TimeEndedInput() *string
```

- *Type:* *string

---

##### `TimeStartedInput`<sup>Optional</sup> <a name="TimeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStartedInput"></a>

```go
func TimeStartedInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.securityPolicyId"></a>

```go
func SecurityPolicyId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalytics.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallPolicyAnalyticsConfig <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

&dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	Filter: interface{},
	GroupBy: *[]*string,
	Id: *string,
	SecurityPolicyId: *string,
	State: *string,
	TimeEnded: *string,
	TimeStarted: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.securityPolicyId">SecurityPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#filter DataOciDataSafeSqlFirewallPolicyAnalytics#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityPolicyId`<sup>Optional</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.securityPolicyId"></a>

```go
SecurityPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}.

---

##### `TimeEnded`<sup>Optional</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeEnded"></a>

```go
TimeEnded *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}.

---

##### `TimeStarted`<sup>Optional</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsConfig.property.timeStarted"></a>

```go
TimeStarted *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}.

---

### DataOciDataSafeSqlFirewallPolicyAnalyticsFilter <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

&dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#name DataOciDataSafeSqlFirewallPolicyAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#values DataOciDataSafeSqlFirewallPolicyAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#regex DataOciDataSafeSqlFirewallPolicyAnalytics#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#name DataOciDataSafeSqlFirewallPolicyAnalytics#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#values DataOciDataSafeSqlFirewallPolicyAnalytics#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#regex DataOciDataSafeSqlFirewallPolicyAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

&dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection {

}
```


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

&dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems {

}
```


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

&dataocidatasafesqlfirewallpolicyanalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalyticsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.enforcementScope">EnforcementScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.securityPolicyId">SecurityPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction">ViolationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforcementScope`<sup>Required</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.enforcementScope"></a>

```go
func EnforcementScope() *string
```

- *Type:* *string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.securityPolicyId"></a>

```go
func SecurityPolicyId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ViolationAction`<sup>Required</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.violationAction"></a>

```go
func ViolationAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.sqlFirewallPolicyAnalyticCount">SqlFirewallPolicyAnalyticCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```go
func Dimensions() DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList</a>

---

##### `SqlFirewallPolicyAnalyticCount`<sup>Required</sup> <a name="SqlFirewallPolicyAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.sqlFirewallPolicyAnalyticCount"></a>

```go
func SqlFirewallPolicyAnalyticCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallpolicyanalytics"

dataocidatasafesqlfirewallpolicyanalytics.NewDataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallPolicyAnalytics.DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection">DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection</a>

---



