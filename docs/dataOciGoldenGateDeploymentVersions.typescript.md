# `dataOciGoldenGateDeploymentVersions` Submodule <a name="`dataOciGoldenGateDeploymentVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentVersions <a name="DataOciGoldenGateDeploymentVersions" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions oci_golden_gate_deployment_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions(scope: Construct, id: string, config: DataOciGoldenGateDeploymentVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig">DataOciGoldenGateDeploymentVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig">DataOciGoldenGateDeploymentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGoldenGateDeploymentVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a>[]

---

##### `resetDeploymentId` <a name="resetDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isConstruct"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformElement"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformDataSource"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateDeploymentVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateDeploymentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentVersionCollection">deploymentVersionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList">DataOciGoldenGateDeploymentVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deploymentVersionCollection`<sup>Required</sup> <a name="deploymentVersionCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentVersionCollection"></a>

```typescript
public readonly deploymentVersionCollection: DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.filter"></a>

```typescript
public readonly filter: DataOciGoldenGateDeploymentVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList">DataOciGoldenGateDeploymentVersionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGoldenGateDeploymentVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentVersionsConfig <a name="DataOciGoldenGateDeploymentVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentVersionsConfig: dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#compartment_id DataOciGoldenGateDeploymentVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#deployment_id DataOciGoldenGateDeploymentVersions#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#deployment_type DataOciGoldenGateDeploymentVersions#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#id DataOciGoldenGateDeploymentVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#compartment_id DataOciGoldenGateDeploymentVersions#compartment_id}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#deployment_id DataOciGoldenGateDeploymentVersions#deployment_id}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#deployment_type DataOciGoldenGateDeploymentVersions#deployment_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGoldenGateDeploymentVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#filter DataOciGoldenGateDeploymentVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#id DataOciGoldenGateDeploymentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentVersionsDeploymentVersionCollection: dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection = { ... }
```


### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems: dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems = { ... }
```


### DataOciGoldenGateDeploymentVersionsFilter <a name="DataOciGoldenGateDeploymentVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentVersionsFilter: dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#name DataOciGoldenGateDeploymentVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#values DataOciGoldenGateDeploymentVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#regex DataOciGoldenGateDeploymentVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#name DataOciGoldenGateDeploymentVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#values DataOciGoldenGateDeploymentVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#regex DataOciGoldenGateDeploymentVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.isSecurityFix">isSecurityFix</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.oggVersion">oggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.releaseType">releaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.timeReleased">timeReleased</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.timeSupportedUntil">timeSupportedUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `isSecurityFix`<sup>Required</sup> <a name="isSecurityFix" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.isSecurityFix"></a>

```typescript
public readonly isSecurityFix: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.oggVersion"></a>

```typescript
public readonly oggVersion: string;
```

- *Type:* string

---

##### `releaseType`<sup>Required</sup> <a name="releaseType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.releaseType"></a>

```typescript
public readonly releaseType: string;
```

- *Type:* string

---

##### `timeReleased`<sup>Required</sup> <a name="timeReleased" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.timeReleased"></a>

```typescript
public readonly timeReleased: string;
```

- *Type:* string

---

##### `timeSupportedUntil`<sup>Required</sup> <a name="timeSupportedUntil" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.timeSupportedUntil"></a>

```typescript
public readonly timeSupportedUntil: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems</a>

---


### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection</a>

---


### DataOciGoldenGateDeploymentVersionsFilterList <a name="DataOciGoldenGateDeploymentVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateDeploymentVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a>[]

---


### DataOciGoldenGateDeploymentVersionsFilterOutputReference <a name="DataOciGoldenGateDeploymentVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateDeploymentVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter">DataOciGoldenGateDeploymentVersionsFilter</a>

---



