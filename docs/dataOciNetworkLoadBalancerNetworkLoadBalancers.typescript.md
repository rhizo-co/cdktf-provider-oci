# `dataOciNetworkLoadBalancerNetworkLoadBalancers` Submodule <a name="`dataOciNetworkLoadBalancerNetworkLoadBalancers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancers <a name="DataOciNetworkLoadBalancerNetworkLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers oci_network_load_balancer_network_load_balancers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers(scope: Construct, id: string, config: DataOciNetworkLoadBalancerNetworkLoadBalancersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig">DataOciNetworkLoadBalancerNetworkLoadBalancersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig">DataOciNetworkLoadBalancerNetworkLoadBalancersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isConstruct"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isTerraformElement"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isTerraformDataSource"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.generateConfigForImport"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkLoadBalancerNetworkLoadBalancers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkLoadBalancerNetworkLoadBalancers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerNetworkLoadBalancers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList">DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.networkLoadBalancerCollection">networkLoadBalancerCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.filter"></a>

```typescript
public readonly filter: DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList">DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList</a>

---

##### `networkLoadBalancerCollection`<sup>Required</sup> <a name="networkLoadBalancerCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.networkLoadBalancerCollection"></a>

```typescript
public readonly networkLoadBalancerCollection: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersConfig <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersConfig: dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#compartment_id DataOciNetworkLoadBalancerNetworkLoadBalancers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#display_name DataOciNetworkLoadBalancerNetworkLoadBalancers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#id DataOciNetworkLoadBalancerNetworkLoadBalancers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#state DataOciNetworkLoadBalancerNetworkLoadBalancers#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#compartment_id DataOciNetworkLoadBalancerNetworkLoadBalancers#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#display_name DataOciNetworkLoadBalancerNetworkLoadBalancers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#filter DataOciNetworkLoadBalancerNetworkLoadBalancers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#id DataOciNetworkLoadBalancerNetworkLoadBalancers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#state DataOciNetworkLoadBalancerNetworkLoadBalancers#state}.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancersFilter <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersFilter: dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#name DataOciNetworkLoadBalancerNetworkLoadBalancers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#values DataOciNetworkLoadBalancerNetworkLoadBalancers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#regex DataOciNetworkLoadBalancerNetworkLoadBalancers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#name DataOciNetworkLoadBalancerNetworkLoadBalancers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#values DataOciNetworkLoadBalancerNetworkLoadBalancers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers#regex DataOciNetworkLoadBalancerNetworkLoadBalancers#regex}.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection: dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection = { ... }
```


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems: dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems = { ... }
```


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses: dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses = { ... }
```


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp: dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp = { ... }
```


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps: dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.get"></a>

```typescript
public get(index: number): DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a>[]

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersFilter</a>

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.get"></a>

```typescript
public get(index: number): DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.isPublic">isPublic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.reservedIp">reservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.isPublic"></a>

```typescript
public readonly isPublic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `reservedIp`<sup>Required</sup> <a name="reservedIp" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.reservedIp"></a>

```typescript
public readonly reservedIp: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddresses</a>

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.get"></a>

```typescript
public get(index: number): DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesReservedIp</a>

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.assignedIpv6">assignedIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.assignedPrivateIpv4">assignedPrivateIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.isPreserveSourceDestination">isPreserveSourceDestination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.isPrivate">isPrivate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.isSymmetricHashEnabled">isSymmetricHashEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.nlbIpVersion">nlbIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.reservedIps">reservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.subnetIpv6Cidr">subnetIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignedIpv6`<sup>Required</sup> <a name="assignedIpv6" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.assignedIpv6"></a>

```typescript
public readonly assignedIpv6: string;
```

- *Type:* string

---

##### `assignedPrivateIpv4`<sup>Required</sup> <a name="assignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.assignedPrivateIpv4"></a>

```typescript
public readonly assignedPrivateIpv4: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsIpAddressesList</a>

---

##### `isPreserveSourceDestination`<sup>Required</sup> <a name="isPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.isPreserveSourceDestination"></a>

```typescript
public readonly isPreserveSourceDestination: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.isPrivate"></a>

```typescript
public readonly isPrivate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSymmetricHashEnabled`<sup>Required</sup> <a name="isSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.isSymmetricHashEnabled"></a>

```typescript
public readonly isSymmetricHashEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.networkSecurityGroupIds"></a>

```typescript
public readonly networkSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `nlbIpVersion`<sup>Required</sup> <a name="nlbIpVersion" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.nlbIpVersion"></a>

```typescript
public readonly nlbIpVersion: string;
```

- *Type:* string

---

##### `reservedIps`<sup>Required</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.reservedIps"></a>

```typescript
public readonly reservedIps: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList</a>

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnetIpv6Cidr`<sup>Required</sup> <a name="subnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.subnetIpv6Cidr"></a>

```typescript
public readonly subnetIpv6Cidr: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItems</a>

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.get"></a>

```typescript
public get(index: number): DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsReservedIps</a>

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.get"></a>

```typescript
public get(index: number): DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancers } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancers.DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection">DataOciNetworkLoadBalancerNetworkLoadBalancersNetworkLoadBalancerCollection</a>

---



