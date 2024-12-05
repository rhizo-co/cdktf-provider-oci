# `dataOciCoreDedicatedVmHostsInstances` Submodule <a name="`dataOciCoreDedicatedVmHostsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDedicatedVmHostsInstances <a name="DataOciCoreDedicatedVmHostsInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances oci_core_dedicated_vm_hosts_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.NewDataOciCoreDedicatedVmHostsInstances(scope Construct, id *string, config DataOciCoreDedicatedVmHostsInstancesConfig) DataOciCoreDedicatedVmHostsInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig">DataOciCoreDedicatedVmHostsInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig">DataOciCoreDedicatedVmHostsInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDedicatedVmHostsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.DataOciCoreDedicatedVmHostsInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.DataOciCoreDedicatedVmHostsInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.DataOciCoreDedicatedVmHostsInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.DataOciCoreDedicatedVmHostsInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreDedicatedVmHostsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreDedicatedVmHostsInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreDedicatedVmHostsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDedicatedVmHostsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostInstances">DedicatedVmHostInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList">DataOciCoreDedicatedVmHostsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostIdInput">DedicatedVmHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostId">DedicatedVmHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DedicatedVmHostInstances`<sup>Required</sup> <a name="DedicatedVmHostInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostInstances"></a>

```go
func DedicatedVmHostInstances() DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filter"></a>

```go
func Filter() DataOciCoreDedicatedVmHostsInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList">DataOciCoreDedicatedVmHostsInstancesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DedicatedVmHostIdInput`<sup>Optional</sup> <a name="DedicatedVmHostIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostIdInput"></a>

```go
func DedicatedVmHostIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DedicatedVmHostId`<sup>Required</sup> <a name="DedicatedVmHostId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostId"></a>

```go
func DedicatedVmHostId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDedicatedVmHostsInstancesConfig <a name="DataOciCoreDedicatedVmHostsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

&dataocicorededicatedvmhostsinstances.DataOciCoreDedicatedVmHostsInstancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DedicatedVmHostId: *string,
	AvailabilityDomain: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#compartment_id DataOciCoreDedicatedVmHostsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dedicatedVmHostId">DedicatedVmHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#dedicated_vm_host_id DataOciCoreDedicatedVmHostsInstances#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#availability_domain DataOciCoreDedicatedVmHostsInstances#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#id DataOciCoreDedicatedVmHostsInstances#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#compartment_id DataOciCoreDedicatedVmHostsInstances#compartment_id}.

---

##### `DedicatedVmHostId`<sup>Required</sup> <a name="DedicatedVmHostId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dedicatedVmHostId"></a>

```go
DedicatedVmHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#dedicated_vm_host_id DataOciCoreDedicatedVmHostsInstances#dedicated_vm_host_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#availability_domain DataOciCoreDedicatedVmHostsInstances#availability_domain}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#filter DataOciCoreDedicatedVmHostsInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#id DataOciCoreDedicatedVmHostsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

&dataocicorededicatedvmhostsinstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances {

}
```


### DataOciCoreDedicatedVmHostsInstancesFilter <a name="DataOciCoreDedicatedVmHostsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

&dataocicorededicatedvmhostsinstances.DataOciCoreDedicatedVmHostsInstancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#name DataOciCoreDedicatedVmHostsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#values DataOciCoreDedicatedVmHostsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#regex DataOciCoreDedicatedVmHostsInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#name DataOciCoreDedicatedVmHostsInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#values DataOciCoreDedicatedVmHostsInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#regex DataOciCoreDedicatedVmHostsInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.NewDataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get"></a>

```go
func Get(index *f64) DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.NewDataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances</a>

---


### DataOciCoreDedicatedVmHostsInstancesFilterList <a name="DataOciCoreDedicatedVmHostsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.NewDataOciCoreDedicatedVmHostsInstancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreDedicatedVmHostsInstancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreDedicatedVmHostsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreDedicatedVmHostsInstancesFilterOutputReference <a name="DataOciCoreDedicatedVmHostsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorededicatedvmhostsinstances"

dataocicorededicatedvmhostsinstances.NewDataOciCoreDedicatedVmHostsInstancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreDedicatedVmHostsInstancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


