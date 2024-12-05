# `dataOciGoldenGateDeploymentBackups` Submodule <a name="`dataOciGoldenGateDeploymentBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentBackups <a name="DataOciGoldenGateDeploymentBackups" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups oci_golden_gate_deployment_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups(scope: Construct, id: string, config: DataOciGoldenGateDeploymentBackupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig">DataOciGoldenGateDeploymentBackupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig">DataOciGoldenGateDeploymentBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGoldenGateDeploymentBackupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>[]

---

##### `resetDeploymentId` <a name="resetDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentBackups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isConstruct"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformElement"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformDataSource"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateDeploymentBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateDeploymentBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentBackupCollection">deploymentBackupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList">DataOciGoldenGateDeploymentBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deploymentBackupCollection`<sup>Required</sup> <a name="deploymentBackupCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentBackupCollection"></a>

```typescript
public readonly deploymentBackupCollection: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.filter"></a>

```typescript
public readonly filter: DataOciGoldenGateDeploymentBackupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList">DataOciGoldenGateDeploymentBackupsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGoldenGateDeploymentBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentBackupsConfig <a name="DataOciGoldenGateDeploymentBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentBackupsConfig: dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#compartment_id DataOciGoldenGateDeploymentBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#deployment_id DataOciGoldenGateDeploymentBackups#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#display_name DataOciGoldenGateDeploymentBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#id DataOciGoldenGateDeploymentBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#state DataOciGoldenGateDeploymentBackups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#compartment_id DataOciGoldenGateDeploymentBackups#compartment_id}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#deployment_id DataOciGoldenGateDeploymentBackups#deployment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#display_name DataOciGoldenGateDeploymentBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGoldenGateDeploymentBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#filter DataOciGoldenGateDeploymentBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#id DataOciGoldenGateDeploymentBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#state DataOciGoldenGateDeploymentBackups#state}.

---

### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentBackupsDeploymentBackupCollection: dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection = { ... }
```


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems: dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems = { ... }
```


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks: dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks = { ... }
```


### DataOciGoldenGateDeploymentBackupsFilter <a name="DataOciGoldenGateDeploymentBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentBackupsFilter: dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#name DataOciGoldenGateDeploymentBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#values DataOciGoldenGateDeploymentBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#regex DataOciGoldenGateDeploymentBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#name DataOciGoldenGateDeploymentBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#values DataOciGoldenGateDeploymentBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_backups#regex DataOciGoldenGateDeploymentBackups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocks</a>

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.backupType">backupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isAutomatic">isAutomatic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isMetadataOnly">isMetadataOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.oggVersion">oggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeBackupFinished">timeBackupFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeOfBackup">timeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutomatic`<sup>Required</sup> <a name="isAutomatic" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isAutomatic"></a>

```typescript
public readonly isAutomatic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMetadataOnly`<sup>Required</sup> <a name="isMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.isMetadataOnly"></a>

```typescript
public readonly isMetadataOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsLocksList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.oggVersion"></a>

```typescript
public readonly oggVersion: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeBackupFinished`<sup>Required</sup> <a name="timeBackupFinished" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeBackupFinished"></a>

```typescript
public readonly timeBackupFinished: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfBackup`<sup>Required</sup> <a name="timeOfBackup" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeOfBackup"></a>

```typescript
public readonly timeOfBackup: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItems</a>

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference <a name="DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection">DataOciGoldenGateDeploymentBackupsDeploymentBackupCollection</a>

---


### DataOciGoldenGateDeploymentBackupsFilterList <a name="DataOciGoldenGateDeploymentBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentBackupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateDeploymentBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>[]

---


### DataOciGoldenGateDeploymentBackupsFilterOutputReference <a name="DataOciGoldenGateDeploymentBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateDeploymentBackupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentBackups.DataOciGoldenGateDeploymentBackupsFilter">DataOciGoldenGateDeploymentBackupsFilter</a>

---



