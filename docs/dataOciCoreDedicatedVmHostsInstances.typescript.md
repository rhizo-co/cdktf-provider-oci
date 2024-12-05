# `dataOciCoreDedicatedVmHostsInstances` Submodule <a name="`dataOciCoreDedicatedVmHostsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDedicatedVmHostsInstances <a name="DataOciCoreDedicatedVmHostsInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances oci_core_dedicated_vm_hosts_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances(scope: Construct, id: string, config: DataOciCoreDedicatedVmHostsInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig">DataOciCoreDedicatedVmHostsInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig">DataOciCoreDedicatedVmHostsInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreDedicatedVmHostsInstancesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDedicatedVmHostsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreDedicatedVmHostsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreDedicatedVmHostsInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreDedicatedVmHostsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDedicatedVmHostsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostInstances">dedicatedVmHostInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList">DataOciCoreDedicatedVmHostsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostIdInput">dedicatedVmHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostId">dedicatedVmHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dedicatedVmHostInstances`<sup>Required</sup> <a name="dedicatedVmHostInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostInstances"></a>

```typescript
public readonly dedicatedVmHostInstances: DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filter"></a>

```typescript
public readonly filter: DataOciCoreDedicatedVmHostsInstancesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList">DataOciCoreDedicatedVmHostsInstancesFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dedicatedVmHostIdInput`<sup>Optional</sup> <a name="dedicatedVmHostIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostIdInput"></a>

```typescript
public readonly dedicatedVmHostIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreDedicatedVmHostsInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dedicatedVmHostId`<sup>Required</sup> <a name="dedicatedVmHostId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostId"></a>

```typescript
public readonly dedicatedVmHostId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDedicatedVmHostsInstancesConfig <a name="DataOciCoreDedicatedVmHostsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDedicatedVmHostsInstancesConfig: dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#compartment_id DataOciCoreDedicatedVmHostsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dedicatedVmHostId">dedicatedVmHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#dedicated_vm_host_id DataOciCoreDedicatedVmHostsInstances#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#availability_domain DataOciCoreDedicatedVmHostsInstances#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#id DataOciCoreDedicatedVmHostsInstances#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#compartment_id DataOciCoreDedicatedVmHostsInstances#compartment_id}.

---

##### `dedicatedVmHostId`<sup>Required</sup> <a name="dedicatedVmHostId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dedicatedVmHostId"></a>

```typescript
public readonly dedicatedVmHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#dedicated_vm_host_id DataOciCoreDedicatedVmHostsInstances#dedicated_vm_host_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#availability_domain DataOciCoreDedicatedVmHostsInstances#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreDedicatedVmHostsInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#filter DataOciCoreDedicatedVmHostsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#id DataOciCoreDedicatedVmHostsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances: dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances = { ... }
```


### DataOciCoreDedicatedVmHostsInstancesFilter <a name="DataOciCoreDedicatedVmHostsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDedicatedVmHostsInstancesFilter: dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#name DataOciCoreDedicatedVmHostsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#values DataOciCoreDedicatedVmHostsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#regex DataOciCoreDedicatedVmHostsInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#name DataOciCoreDedicatedVmHostsInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#values DataOciCoreDedicatedVmHostsInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#regex DataOciCoreDedicatedVmHostsInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get"></a>

```typescript
public get(index: number): DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances</a>

---


### DataOciCoreDedicatedVmHostsInstancesFilterList <a name="DataOciCoreDedicatedVmHostsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreDedicatedVmHostsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreDedicatedVmHostsInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>[]

---


### DataOciCoreDedicatedVmHostsInstancesFilterOutputReference <a name="DataOciCoreDedicatedVmHostsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreDedicatedVmHostsInstancesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>

---



