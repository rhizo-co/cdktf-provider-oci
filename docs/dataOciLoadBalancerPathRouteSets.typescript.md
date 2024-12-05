# `dataOciLoadBalancerPathRouteSets` Submodule <a name="`dataOciLoadBalancerPathRouteSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerPathRouteSets <a name="DataOciLoadBalancerPathRouteSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets oci_load_balancer_path_route_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets(scope: Construct, id: string, config: DataOciLoadBalancerPathRouteSetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig">DataOciLoadBalancerPathRouteSetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig">DataOciLoadBalancerPathRouteSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLoadBalancerPathRouteSetsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerPathRouteSets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isConstruct"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformElement"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformDataSource"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLoadBalancerPathRouteSets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoadBalancerPathRouteSets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoadBalancerPathRouteSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerPathRouteSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList">DataOciLoadBalancerPathRouteSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.pathRouteSets">pathRouteSets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList">DataOciLoadBalancerPathRouteSetsPathRouteSetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.filter"></a>

```typescript
public readonly filter: DataOciLoadBalancerPathRouteSetsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList">DataOciLoadBalancerPathRouteSetsFilterList</a>

---

##### `pathRouteSets`<sup>Required</sup> <a name="pathRouteSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.pathRouteSets"></a>

```typescript
public readonly pathRouteSets: DataOciLoadBalancerPathRouteSetsPathRouteSetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList">DataOciLoadBalancerPathRouteSetsPathRouteSetsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLoadBalancerPathRouteSetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerPathRouteSetsConfig <a name="DataOciLoadBalancerPathRouteSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerPathRouteSetsConfig: dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#load_balancer_id DataOciLoadBalancerPathRouteSets#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#id DataOciLoadBalancerPathRouteSets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#load_balancer_id DataOciLoadBalancerPathRouteSets#load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLoadBalancerPathRouteSetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#filter DataOciLoadBalancerPathRouteSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#id DataOciLoadBalancerPathRouteSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerPathRouteSetsFilter <a name="DataOciLoadBalancerPathRouteSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerPathRouteSetsFilter: dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#name DataOciLoadBalancerPathRouteSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#values DataOciLoadBalancerPathRouteSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#regex DataOciLoadBalancerPathRouteSets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#name DataOciLoadBalancerPathRouteSets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#values DataOciLoadBalancerPathRouteSets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#regex DataOciLoadBalancerPathRouteSets#regex}.

---

### DataOciLoadBalancerPathRouteSetsPathRouteSets <a name="DataOciLoadBalancerPathRouteSetsPathRouteSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerPathRouteSetsPathRouteSets: dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets = { ... }
```


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes: dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes = { ... }
```


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType: dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerPathRouteSetsFilterList <a name="DataOciLoadBalancerPathRouteSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerPathRouteSetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoadBalancerPathRouteSetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a>[]

---


### DataOciLoadBalancerPathRouteSetsFilterOutputReference <a name="DataOciLoadBalancerPathRouteSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoadBalancerPathRouteSetsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter">DataOciLoadBalancerPathRouteSetsFilter</a>

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsList <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.pathRoutes">pathRoutes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets">DataOciLoadBalancerPathRouteSetsPathRouteSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pathRoutes`<sup>Required</sup> <a name="pathRoutes" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.pathRoutes"></a>

```typescript
public readonly pathRoutes: DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerPathRouteSetsPathRouteSets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets">DataOciLoadBalancerPathRouteSetsPathRouteSets</a>

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.backendSetName">backendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.pathMatchType">pathMatchType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.backendSetName"></a>

```typescript
public readonly backendSetName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathMatchType`<sup>Required</sup> <a name="pathMatchType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.pathMatchType"></a>

```typescript
public readonly pathMatchType: DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes</a>

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerPathRouteSets } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType</a>

---



