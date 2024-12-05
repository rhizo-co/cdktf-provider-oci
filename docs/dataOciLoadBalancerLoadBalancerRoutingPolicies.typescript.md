# `dataOciLoadBalancerLoadBalancerRoutingPolicies` Submodule <a name="`dataOciLoadBalancerLoadBalancerRoutingPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicies <a name="DataOciLoadBalancerLoadBalancerRoutingPolicies" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies oci_load_balancer_load_balancer_routing_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies(scope: Construct, id: string, config: DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig">DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig">DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isConstruct"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformElement"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformDataSource"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoadBalancerLoadBalancerRoutingPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoadBalancerLoadBalancerRoutingPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerLoadBalancerRoutingPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.routingPolicies">routingPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.filter"></a>

```typescript
public readonly filter: DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList</a>

---

##### `routingPolicies`<sup>Required</sup> <a name="routingPolicies" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.routingPolicies"></a>

```typescript
public readonly routingPolicies: DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerLoadBalancerRoutingPoliciesConfig: dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicies#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#id DataOciLoadBalancerLoadBalancerRoutingPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicies#load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#filter DataOciLoadBalancerLoadBalancerRoutingPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#id DataOciLoadBalancerLoadBalancerRoutingPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerLoadBalancerRoutingPoliciesFilter: dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#name DataOciLoadBalancerLoadBalancerRoutingPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#values DataOciLoadBalancerLoadBalancerRoutingPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#regex DataOciLoadBalancerLoadBalancerRoutingPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#name DataOciLoadBalancerLoadBalancerRoutingPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#values DataOciLoadBalancerLoadBalancerRoutingPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policies#regex DataOciLoadBalancerLoadBalancerRoutingPolicies#regex}.

---

### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies: dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies = { ... }
```


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules: dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules = { ... }
```


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions: dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a>[]

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter">DataOciLoadBalancerLoadBalancerRoutingPoliciesFilter</a>

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.conditionLanguageVersion"></a>

```typescript
public readonly conditionLanguageVersion: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPolicies</a>

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.backendSetName">backendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.backendSetName"></a>

```typescript
public readonly backendSetName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActions</a>

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.actions"></a>

```typescript
public readonly actions: DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesActionsList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicies.DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules">DataOciLoadBalancerLoadBalancerRoutingPoliciesRoutingPoliciesRules</a>

---



