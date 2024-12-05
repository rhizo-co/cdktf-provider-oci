# `dataOciRecoveryRecoveryServiceSubnets` Submodule <a name="`dataOciRecoveryRecoveryServiceSubnets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryRecoveryServiceSubnets <a name="DataOciRecoveryRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets oci_recovery_recovery_service_subnets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets(scope: Construct, id: string, config: DataOciRecoveryRecoveryServiceSubnetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig">DataOciRecoveryRecoveryServiceSubnetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig">DataOciRecoveryRecoveryServiceSubnetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciRecoveryRecoveryServiceSubnetsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetVcnId"></a>

```typescript
public resetVcnId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryRecoveryServiceSubnets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciRecoveryRecoveryServiceSubnets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciRecoveryRecoveryServiceSubnets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciRecoveryRecoveryServiceSubnets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryRecoveryServiceSubnets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList">DataOciRecoveryRecoveryServiceSubnetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.recoveryServiceSubnetCollection">recoveryServiceSubnetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filter"></a>

```typescript
public readonly filter: DataOciRecoveryRecoveryServiceSubnetsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList">DataOciRecoveryRecoveryServiceSubnetsFilterList</a>

---

##### `recoveryServiceSubnetCollection`<sup>Required</sup> <a name="recoveryServiceSubnetCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.recoveryServiceSubnetCollection"></a>

```typescript
public readonly recoveryServiceSubnetCollection: DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciRecoveryRecoveryServiceSubnetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryRecoveryServiceSubnetsConfig <a name="DataOciRecoveryRecoveryServiceSubnetsConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryRecoveryServiceSubnetsConfig: dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#compartment_id DataOciRecoveryRecoveryServiceSubnets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#display_name DataOciRecoveryRecoveryServiceSubnets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#id DataOciRecoveryRecoveryServiceSubnets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#state DataOciRecoveryRecoveryServiceSubnets#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#vcn_id DataOciRecoveryRecoveryServiceSubnets#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#compartment_id DataOciRecoveryRecoveryServiceSubnets#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#display_name DataOciRecoveryRecoveryServiceSubnets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciRecoveryRecoveryServiceSubnetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#filter DataOciRecoveryRecoveryServiceSubnets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#id DataOciRecoveryRecoveryServiceSubnets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#state DataOciRecoveryRecoveryServiceSubnets#state}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#vcn_id DataOciRecoveryRecoveryServiceSubnets#vcn_id}.

---

### DataOciRecoveryRecoveryServiceSubnetsFilter <a name="DataOciRecoveryRecoveryServiceSubnetsFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryRecoveryServiceSubnetsFilter: dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#name DataOciRecoveryRecoveryServiceSubnets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#values DataOciRecoveryRecoveryServiceSubnets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#regex DataOciRecoveryRecoveryServiceSubnets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#name DataOciRecoveryRecoveryServiceSubnets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#values DataOciRecoveryRecoveryServiceSubnets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#regex DataOciRecoveryRecoveryServiceSubnets#regex}.

---

### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection: dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection = { ... }
```


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems: dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryRecoveryServiceSubnetsFilterList <a name="DataOciRecoveryRecoveryServiceSubnetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get"></a>

```typescript
public get(index: number): DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciRecoveryRecoveryServiceSubnetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>[]

---


### DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciRecoveryRecoveryServiceSubnetsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems</a>

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get"></a>

```typescript
public get(index: number): DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryRecoveryServiceSubnets } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection</a>

---



