# `dataOciGoldenGateDeploymentCertificate` Submodule <a name="`dataOciGoldenGateDeploymentCertificate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentCertificate <a name="DataOciGoldenGateDeploymentCertificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate oci_golden_gate_deployment_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentCertificate } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate(scope: Construct, id: string, config: DataOciGoldenGateDeploymentCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig">DataOciGoldenGateDeploymentCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig">DataOciGoldenGateDeploymentCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isConstruct"></a>

```typescript
import { dataOciGoldenGateDeploymentCertificate } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformElement"></a>

```typescript
import { dataOciGoldenGateDeploymentCertificate } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformDataSource"></a>

```typescript
import { dataOciGoldenGateDeploymentCertificate } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport"></a>

```typescript
import { dataOciGoldenGateDeploymentCertificate } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateDeploymentCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateDeploymentCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.authorityKeyId">authorityKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateContent">certificateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isCa">isCa</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isSelfSigned">isSelfSigned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.md5Hash">md5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKeyAlgorithm">publicKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKeySize">publicKeySize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.serial">serial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.sha1Hash">sha1Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.subjectKeyId">subjectKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeValidFrom">timeValidFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeValidTo">timeValidTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateKeyInput">certificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateKey">certificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authorityKeyId`<sup>Required</sup> <a name="authorityKeyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.authorityKeyId"></a>

```typescript
public readonly authorityKeyId: string;
```

- *Type:* string

---

##### `certificateContent`<sup>Required</sup> <a name="certificateContent" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateContent"></a>

```typescript
public readonly certificateContent: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCa`<sup>Required</sup> <a name="isCa" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isCa"></a>

```typescript
public readonly isCa: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSelfSigned`<sup>Required</sup> <a name="isSelfSigned" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isSelfSigned"></a>

```typescript
public readonly isSelfSigned: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `md5Hash`<sup>Required</sup> <a name="md5Hash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.md5Hash"></a>

```typescript
public readonly md5Hash: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `publicKeyAlgorithm`<sup>Required</sup> <a name="publicKeyAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKeyAlgorithm"></a>

```typescript
public readonly publicKeyAlgorithm: string;
```

- *Type:* string

---

##### `publicKeySize`<sup>Required</sup> <a name="publicKeySize" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKeySize"></a>

```typescript
public readonly publicKeySize: string;
```

- *Type:* string

---

##### `serial`<sup>Required</sup> <a name="serial" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.serial"></a>

```typescript
public readonly serial: string;
```

- *Type:* string

---

##### `sha1Hash`<sup>Required</sup> <a name="sha1Hash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.sha1Hash"></a>

```typescript
public readonly sha1Hash: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `subjectKeyId`<sup>Required</sup> <a name="subjectKeyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.subjectKeyId"></a>

```typescript
public readonly subjectKeyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeValidFrom`<sup>Required</sup> <a name="timeValidFrom" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeValidFrom"></a>

```typescript
public readonly timeValidFrom: string;
```

- *Type:* string

---

##### `timeValidTo`<sup>Required</sup> <a name="timeValidTo" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeValidTo"></a>

```typescript
public readonly timeValidTo: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `certificateKeyInput`<sup>Optional</sup> <a name="certificateKeyInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateKeyInput"></a>

```typescript
public readonly certificateKeyInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `certificateKey`<sup>Required</sup> <a name="certificateKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateKey"></a>

```typescript
public readonly certificateKey: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentCertificateConfig <a name="DataOciGoldenGateDeploymentCertificateConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.Initializer"></a>

```typescript
import { dataOciGoldenGateDeploymentCertificate } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentCertificateConfig: dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.certificateKey">certificateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#certificate_key DataOciGoldenGateDeploymentCertificate#certificate_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#deployment_id DataOciGoldenGateDeploymentCertificate#deployment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateKey`<sup>Required</sup> <a name="certificateKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.certificateKey"></a>

```typescript
public readonly certificateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#certificate_key DataOciGoldenGateDeploymentCertificate#certificate_key}.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#deployment_id DataOciGoldenGateDeploymentCertificate#deployment_id}.

---



