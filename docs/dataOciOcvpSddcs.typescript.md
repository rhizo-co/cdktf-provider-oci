# `dataOciOcvpSddcs` Submodule <a name="`dataOciOcvpSddcs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSddcs <a name="DataOciOcvpSddcs" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs oci_ocvp_sddcs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcs(scope: Construct, id: string, config: DataOciOcvpSddcsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig">DataOciOcvpSddcsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig">DataOciOcvpSddcsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetComputeAvailabilityDomain">resetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOcvpSddcsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>[]

---

##### `resetComputeAvailabilityDomain` <a name="resetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetComputeAvailabilityDomain"></a>

```typescript
public resetComputeAvailabilityDomain(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSddcs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOcvpSddcs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpSddcs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpSddcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSddcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList">DataOciOcvpSddcsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.sddcCollection">sddcCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList">DataOciOcvpSddcsSddcCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filter"></a>

```typescript
public readonly filter: DataOciOcvpSddcsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList">DataOciOcvpSddcsFilterList</a>

---

##### `sddcCollection`<sup>Required</sup> <a name="sddcCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.sddcCollection"></a>

```typescript
public readonly sddcCollection: DataOciOcvpSddcsSddcCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList">DataOciOcvpSddcsSddcCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomainInput"></a>

```typescript
public readonly computeAvailabilityDomainInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOcvpSddcsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSddcsConfig <a name="DataOciOcvpSddcsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsConfig: dataOciOcvpSddcs.DataOciOcvpSddcsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compartment_id DataOciOcvpSddcs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compute_availability_domain DataOciOcvpSddcs#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#display_name DataOciOcvpSddcs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#id DataOciOcvpSddcs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#state DataOciOcvpSddcs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compartment_id DataOciOcvpSddcs#compartment_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compute_availability_domain DataOciOcvpSddcs#compute_availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#display_name DataOciOcvpSddcs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOcvpSddcsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#filter DataOciOcvpSddcs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#id DataOciOcvpSddcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#state DataOciOcvpSddcs#state}.

---

### DataOciOcvpSddcsFilter <a name="DataOciOcvpSddcsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsFilter: dataOciOcvpSddcs.DataOciOcvpSddcsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#name DataOciOcvpSddcs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#values DataOciOcvpSddcs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#regex DataOciOcvpSddcs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#name DataOciOcvpSddcs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#values DataOciOcvpSddcs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#regex DataOciOcvpSddcs#regex}.

---

### DataOciOcvpSddcsSddcCollection <a name="DataOciOcvpSddcsSddcCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollection: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection = { ... }
```


### DataOciOcvpSddcsSddcCollectionDatastores <a name="DataOciOcvpSddcsSddcCollectionDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollectionDatastores: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores = { ... }
```


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollectionHcxOnPremLicenses: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses = { ... }
```


### DataOciOcvpSddcsSddcCollectionInitialConfiguration <a name="DataOciOcvpSddcsSddcCollectionInitialConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollectionInitialConfiguration: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration = { ... }
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations = { ... }
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores = { ... }
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration = { ... }
```


### DataOciOcvpSddcsSddcCollectionUpgradeLicenses <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollectionUpgradeLicenses: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses = { ... }
```


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects: dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSddcsFilterList <a name="DataOciOcvpSddcsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOcvpSddcsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>[]

---


### DataOciOcvpSddcsFilterOutputReference <a name="DataOciOcvpSddcsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOcvpSddcsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>

---


### DataOciOcvpSddcsSddcCollectionDatastoresList <a name="DataOciOcvpSddcsSddcCollectionDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionDatastoresOutputReference <a name="DataOciOcvpSddcsSddcCollectionDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores">DataOciOcvpSddcsSddcCollectionDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollectionDatastores;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores">DataOciOcvpSddcsSddcCollectionDatastores</a>

---


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.activationKey">activationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.systemName">systemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses">DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.activationKey"></a>

```typescript
public readonly activationKey: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemName`<sup>Required</sup> <a name="systemName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.systemName"></a>

```typescript
public readonly systemName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses">DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">initialCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">vsphereType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```typescript
public readonly actualEsxiHostsCount: number;
```

- *Type:* number

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```typescript
public readonly datastores: DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

---

##### `initialCommitment`<sup>Required</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```typescript
public readonly initialCommitment: string;
```

- *Type:* string

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList</a>

---

##### `vsphereType`<sup>Required</sup> <a name="vsphereType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```typescript
public readonly vsphereType: string;
```

- *Type:* string

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.initialClusterConfigurations">initialClusterConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialClusterConfigurations`<sup>Required</sup> <a name="initialClusterConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```typescript
public readonly initialClusterConfigurations: DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollectionInitialConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfiguration</a>

---


### DataOciOcvpSddcsSddcCollectionList <a name="DataOciOcvpSddcsSddcCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionOutputReference <a name="DataOciOcvpSddcsSddcCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.clustersCount">clustersCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList">DataOciOcvpSddcsSddcCollectionDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxAction">hcxAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxFqdn">hcxFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxInitialPassword">hcxInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxMode">hcxMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremKey">hcxOnPremKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremLicenses">hcxOnPremLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList">DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxPrivateIpId">hcxPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialConfiguration">initialConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialSku">initialSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnabled">isHcxEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnterpriseEnabled">isHcxEnterpriseEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxPendingDowngrade">isHcxPendingDowngrade</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isSingleHostSddc">isSingleHostSddc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplinkIpId">nsxEdgeUplinkIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerFqdn">nsxManagerFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerInitialPassword">nsxManagerInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerPrivateIpId">nsxManagerPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerUsername">nsxManagerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxOverlaySegmentName">nsxOverlaySegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.refreshHcxLicenseStatus">refreshHcxLicenseStatus</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.reservingHcxOnPremiseLicenseKeys">reservingHcxOnPremiseLicenseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.sshAuthorizedKeys">sshAuthorizedKeys</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxBillingCycleEnd">timeHcxBillingCycleEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxLicenseStatusUpdated">timeHcxLicenseStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.upgradeLicenses">upgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList">DataOciOcvpSddcsSddcCollectionUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterFqdn">vcenterFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterInitialPassword">vcenterInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterPrivateIpId">vcenterPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterUsername">vcenterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeGuide">vsphereUpgradeGuide</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeObjects">vsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection">DataOciOcvpSddcsSddcCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.actualEsxiHostsCount"></a>

```typescript
public readonly actualEsxiHostsCount: number;
```

- *Type:* number

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `clustersCount`<sup>Required</sup> <a name="clustersCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.clustersCount"></a>

```typescript
public readonly clustersCount: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.datastores"></a>

```typescript
public readonly datastores: DataOciOcvpSddcsSddcCollectionDatastoresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList">DataOciOcvpSddcsSddcCollectionDatastoresList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hcxAction`<sup>Required</sup> <a name="hcxAction" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxAction"></a>

```typescript
public readonly hcxAction: string;
```

- *Type:* string

---

##### `hcxFqdn`<sup>Required</sup> <a name="hcxFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxFqdn"></a>

```typescript
public readonly hcxFqdn: string;
```

- *Type:* string

---

##### `hcxInitialPassword`<sup>Required</sup> <a name="hcxInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxInitialPassword"></a>

```typescript
public readonly hcxInitialPassword: string;
```

- *Type:* string

---

##### `hcxMode`<sup>Required</sup> <a name="hcxMode" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxMode"></a>

```typescript
public readonly hcxMode: string;
```

- *Type:* string

---

##### `hcxOnPremKey`<sup>Required</sup> <a name="hcxOnPremKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremKey"></a>

```typescript
public readonly hcxOnPremKey: string;
```

- *Type:* string

---

##### `hcxOnPremLicenses`<sup>Required</sup> <a name="hcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremLicenses"></a>

```typescript
public readonly hcxOnPremLicenses: DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList">DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList</a>

---

##### `hcxPrivateIpId`<sup>Required</sup> <a name="hcxPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxPrivateIpId"></a>

```typescript
public readonly hcxPrivateIpId: string;
```

- *Type:* string

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialConfiguration`<sup>Required</sup> <a name="initialConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialConfiguration"></a>

```typescript
public readonly initialConfiguration: DataOciOcvpSddcsSddcCollectionInitialConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationList</a>

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

---

##### `initialSku`<sup>Required</sup> <a name="initialSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialSku"></a>

```typescript
public readonly initialSku: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

---

##### `isHcxEnabled`<sup>Required</sup> <a name="isHcxEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnabled"></a>

```typescript
public readonly isHcxEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHcxEnterpriseEnabled`<sup>Required</sup> <a name="isHcxEnterpriseEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnterpriseEnabled"></a>

```typescript
public readonly isHcxEnterpriseEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHcxPendingDowngrade`<sup>Required</sup> <a name="isHcxPendingDowngrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxPendingDowngrade"></a>

```typescript
public readonly isHcxPendingDowngrade: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSingleHostSddc`<sup>Required</sup> <a name="isSingleHostSddc" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isSingleHostSddc"></a>

```typescript
public readonly isSingleHostSddc: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplinkIpId`<sup>Required</sup> <a name="nsxEdgeUplinkIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplinkIpId"></a>

```typescript
public readonly nsxEdgeUplinkIpId: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

---

##### `nsxManagerFqdn`<sup>Required</sup> <a name="nsxManagerFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerFqdn"></a>

```typescript
public readonly nsxManagerFqdn: string;
```

- *Type:* string

---

##### `nsxManagerInitialPassword`<sup>Required</sup> <a name="nsxManagerInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerInitialPassword"></a>

```typescript
public readonly nsxManagerInitialPassword: string;
```

- *Type:* string

---

##### `nsxManagerPrivateIpId`<sup>Required</sup> <a name="nsxManagerPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerPrivateIpId"></a>

```typescript
public readonly nsxManagerPrivateIpId: string;
```

- *Type:* string

---

##### `nsxManagerUsername`<sup>Required</sup> <a name="nsxManagerUsername" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerUsername"></a>

```typescript
public readonly nsxManagerUsername: string;
```

- *Type:* string

---

##### `nsxOverlaySegmentName`<sup>Required</sup> <a name="nsxOverlaySegmentName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxOverlaySegmentName"></a>

```typescript
public readonly nsxOverlaySegmentName: string;
```

- *Type:* string

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

---

##### `refreshHcxLicenseStatus`<sup>Required</sup> <a name="refreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.refreshHcxLicenseStatus"></a>

```typescript
public readonly refreshHcxLicenseStatus: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

---

##### `reservingHcxOnPremiseLicenseKeys`<sup>Required</sup> <a name="reservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.reservingHcxOnPremiseLicenseKeys"></a>

```typescript
public readonly reservingHcxOnPremiseLicenseKeys: string[];
```

- *Type:* string[]

---

##### `sshAuthorizedKeys`<sup>Required</sup> <a name="sshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.sshAuthorizedKeys"></a>

```typescript
public readonly sshAuthorizedKeys: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeHcxBillingCycleEnd`<sup>Required</sup> <a name="timeHcxBillingCycleEnd" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxBillingCycleEnd"></a>

```typescript
public readonly timeHcxBillingCycleEnd: string;
```

- *Type:* string

---

##### `timeHcxLicenseStatusUpdated`<sup>Required</sup> <a name="timeHcxLicenseStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxLicenseStatusUpdated"></a>

```typescript
public readonly timeHcxLicenseStatusUpdated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `upgradeLicenses`<sup>Required</sup> <a name="upgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.upgradeLicenses"></a>

```typescript
public readonly upgradeLicenses: DataOciOcvpSddcsSddcCollectionUpgradeLicensesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList">DataOciOcvpSddcsSddcCollectionUpgradeLicensesList</a>

---

##### `vcenterFqdn`<sup>Required</sup> <a name="vcenterFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterFqdn"></a>

```typescript
public readonly vcenterFqdn: string;
```

- *Type:* string

---

##### `vcenterInitialPassword`<sup>Required</sup> <a name="vcenterInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterInitialPassword"></a>

```typescript
public readonly vcenterInitialPassword: string;
```

- *Type:* string

---

##### `vcenterPrivateIpId`<sup>Required</sup> <a name="vcenterPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterPrivateIpId"></a>

```typescript
public readonly vcenterPrivateIpId: string;
```

- *Type:* string

---

##### `vcenterUsername`<sup>Required</sup> <a name="vcenterUsername" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterUsername"></a>

```typescript
public readonly vcenterUsername: string;
```

- *Type:* string

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmwareSoftwareVersion"></a>

```typescript
public readonly vmwareSoftwareVersion: string;
```

- *Type:* string

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

---

##### `vsphereUpgradeGuide`<sup>Required</sup> <a name="vsphereUpgradeGuide" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeGuide"></a>

```typescript
public readonly vsphereUpgradeGuide: string;
```

- *Type:* string

---

##### `vsphereUpgradeObjects`<sup>Required</sup> <a name="vsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeObjects"></a>

```typescript
public readonly vsphereUpgradeObjects: DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList</a>

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection">DataOciOcvpSddcsSddcCollection</a>

---


### DataOciOcvpSddcsSddcCollectionUpgradeLicensesList <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseKey">licenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses">DataOciOcvpSddcsSddcCollectionUpgradeLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseKey"></a>

```typescript
public readonly licenseKey: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollectionUpgradeLicenses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses">DataOciOcvpSddcsSddcCollectionUpgradeLicenses</a>

---


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get"></a>

```typescript
public get(index: number): DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSddcs } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.downloadLink">downloadLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.linkDescription">linkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downloadLink`<sup>Required</sup> <a name="downloadLink" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```typescript
public readonly downloadLink: string;
```

- *Type:* string

---

##### `linkDescription`<sup>Required</sup> <a name="linkDescription" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```typescript
public readonly linkDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects</a>

---



