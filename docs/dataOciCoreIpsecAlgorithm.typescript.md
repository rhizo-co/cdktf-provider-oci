# `dataOciCoreIpsecAlgorithm` Submodule <a name="`dataOciCoreIpsecAlgorithm` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecAlgorithm <a name="DataOciCoreIpsecAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm oci_core_ipsec_algorithm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm(scope: Construct, id: string, config?: DataOciCoreIpsecAlgorithmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig">DataOciCoreIpsecAlgorithmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig">DataOciCoreIpsecAlgorithmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpsecAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpsecAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseOneParameters">allowedPhaseOneParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseTwoParameters">allowedPhaseTwoParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseOneParameters">defaultPhaseOneParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseTwoParameters">defaultPhaseTwoParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowedPhaseOneParameters`<sup>Required</sup> <a name="allowedPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseOneParameters"></a>

```typescript
public readonly allowedPhaseOneParameters: DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList</a>

---

##### `allowedPhaseTwoParameters`<sup>Required</sup> <a name="allowedPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseTwoParameters"></a>

```typescript
public readonly allowedPhaseTwoParameters: DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList</a>

---

##### `defaultPhaseOneParameters`<sup>Required</sup> <a name="defaultPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseOneParameters"></a>

```typescript
public readonly defaultPhaseOneParameters: DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList</a>

---

##### `defaultPhaseTwoParameters`<sup>Required</sup> <a name="defaultPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseTwoParameters"></a>

```typescript
public readonly defaultPhaseTwoParameters: DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecAlgorithmAllowedPhaseOneParameters: dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters = { ... }
```


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters: dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters = { ... }
```


### DataOciCoreIpsecAlgorithmConfig <a name="DataOciCoreIpsecAlgorithmConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecAlgorithmConfig: dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecAlgorithmDefaultPhaseOneParameters: dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters = { ... }
```


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters: dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.authenticationAlgorithms">authenticationAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.dhGroups">dhGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.encryptionAlgorithms">encryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters">DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationAlgorithms`<sup>Required</sup> <a name="authenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.authenticationAlgorithms"></a>

```typescript
public readonly authenticationAlgorithms: string[];
```

- *Type:* string[]

---

##### `dhGroups`<sup>Required</sup> <a name="dhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.dhGroups"></a>

```typescript
public readonly dhGroups: string[];
```

- *Type:* string[]

---

##### `encryptionAlgorithms`<sup>Required</sup> <a name="encryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.encryptionAlgorithms"></a>

```typescript
public readonly encryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters">DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters</a>

---


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.authenticationAlgorithms">authenticationAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.encryptionAlgorithms">encryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.pfsDhGroups">pfsDhGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationAlgorithms`<sup>Required</sup> <a name="authenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.authenticationAlgorithms"></a>

```typescript
public readonly authenticationAlgorithms: string[];
```

- *Type:* string[]

---

##### `encryptionAlgorithms`<sup>Required</sup> <a name="encryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.encryptionAlgorithms"></a>

```typescript
public readonly encryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `pfsDhGroups`<sup>Required</sup> <a name="pfsDhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.pfsDhGroups"></a>

```typescript
public readonly pfsDhGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters</a>

---


### DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultAuthenticationAlgorithms">defaultAuthenticationAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultDhGroups">defaultDhGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultEncryptionAlgorithms">defaultEncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters">DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultAuthenticationAlgorithms`<sup>Required</sup> <a name="defaultAuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultAuthenticationAlgorithms"></a>

```typescript
public readonly defaultAuthenticationAlgorithms: string[];
```

- *Type:* string[]

---

##### `defaultDhGroups`<sup>Required</sup> <a name="defaultDhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultDhGroups"></a>

```typescript
public readonly defaultDhGroups: string[];
```

- *Type:* string[]

---

##### `defaultEncryptionAlgorithms`<sup>Required</sup> <a name="defaultEncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultEncryptionAlgorithms"></a>

```typescript
public readonly defaultEncryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters">DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters</a>

---


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecAlgorithm } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultAuthenticationAlgorithms">defaultAuthenticationAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultEncryptionAlgorithms">defaultEncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultPfsDhGroup">defaultPfsDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultAuthenticationAlgorithms`<sup>Required</sup> <a name="defaultAuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultAuthenticationAlgorithms"></a>

```typescript
public readonly defaultAuthenticationAlgorithms: string[];
```

- *Type:* string[]

---

##### `defaultEncryptionAlgorithms`<sup>Required</sup> <a name="defaultEncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultEncryptionAlgorithms"></a>

```typescript
public readonly defaultEncryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `defaultPfsDhGroup`<sup>Required</sup> <a name="defaultPfsDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultPfsDhGroup"></a>

```typescript
public readonly defaultPfsDhGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters</a>

---



