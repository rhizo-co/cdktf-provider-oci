# `dataOciIdentityDomainsApprovalWorkflowStep` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowStep` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowStep <a name="DataOciIdentityDomainsApprovalWorkflowStep" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step oci_identity_domains_approval_workflow_step}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep(scope: Construct, id: string, config: DataOciIdentityDomainsApprovalWorkflowStepConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig">DataOciIdentityDomainsApprovalWorkflowStepConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig">DataOciIdentityDomainsApprovalWorkflowStepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowStep resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowStep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowStep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsApprovalWorkflowStep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowStep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.approvers">approvers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList">DataOciIdentityDomainsApprovalWorkflowStepApproversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.approversExpressions">approversExpressions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList">DataOciIdentityDomainsApprovalWorkflowStepMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.minimumApprovals">minimumApprovals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList">DataOciIdentityDomainsApprovalWorkflowStepTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.approvalWorkflowStepIdInput">approvalWorkflowStepIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.approvalWorkflowStepId">approvalWorkflowStepId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.approvers"></a>

```typescript
public readonly approvers: DataOciIdentityDomainsApprovalWorkflowStepApproversList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList">DataOciIdentityDomainsApprovalWorkflowStepApproversList</a>

---

##### `approversExpressions`<sup>Required</sup> <a name="approversExpressions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.approversExpressions"></a>

```typescript
public readonly approversExpressions: string[];
```

- *Type:* string[]

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsApprovalWorkflowStepMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList">DataOciIdentityDomainsApprovalWorkflowStepMetaList</a>

---

##### `minimumApprovals`<sup>Required</sup> <a name="minimumApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.minimumApprovals"></a>

```typescript
public readonly minimumApprovals: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsApprovalWorkflowStepTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList">DataOciIdentityDomainsApprovalWorkflowStepTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `approvalWorkflowStepIdInput`<sup>Optional</sup> <a name="approvalWorkflowStepIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.approvalWorkflowStepIdInput"></a>

```typescript
public readonly approvalWorkflowStepIdInput: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `approvalWorkflowStepId`<sup>Required</sup> <a name="approvalWorkflowStepId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.approvalWorkflowStepId"></a>

```typescript
public readonly approvalWorkflowStepId: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStep.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowStepApprovers <a name="DataOciIdentityDomainsApprovalWorkflowStepApprovers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApprovers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApprovers.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepApprovers: dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApprovers = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepConfig <a name="DataOciIdentityDomainsApprovalWorkflowStepConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepConfig: dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.approvalWorkflowStepId">approvalWorkflowStepId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#approval_workflow_step_id DataOciIdentityDomainsApprovalWorkflowStep#approval_workflow_step_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowStep#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#attributes DataOciIdentityDomainsApprovalWorkflowStep#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#attribute_sets DataOciIdentityDomainsApprovalWorkflowStep#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#authorization DataOciIdentityDomainsApprovalWorkflowStep#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowStep#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalWorkflowStepId`<sup>Required</sup> <a name="approvalWorkflowStepId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.approvalWorkflowStepId"></a>

```typescript
public readonly approvalWorkflowStepId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#approval_workflow_step_id DataOciIdentityDomainsApprovalWorkflowStep#approval_workflow_step_id}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowStep#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#attributes DataOciIdentityDomainsApprovalWorkflowStep#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#attribute_sets DataOciIdentityDomainsApprovalWorkflowStep#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#authorization DataOciIdentityDomainsApprovalWorkflowStep#authorization}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_step#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowStep#resource_type_schema_version}.

---

### DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy: dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy: dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepMeta <a name="DataOciIdentityDomainsApprovalWorkflowStepMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepMeta: dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMeta = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepTags <a name="DataOciIdentityDomainsApprovalWorkflowStepTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepTags: dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowStepApproversList <a name="DataOciIdentityDomainsApprovalWorkflowStepApproversList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApprovers">DataOciIdentityDomainsApprovalWorkflowStepApprovers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApproversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepApprovers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepApprovers">DataOciIdentityDomainsApprovalWorkflowStepApprovers</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowStepIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowStepIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepMetaList <a name="DataOciIdentityDomainsApprovalWorkflowStepMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMeta">DataOciIdentityDomainsApprovalWorkflowStepMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepMeta">DataOciIdentityDomainsApprovalWorkflowStepMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepTagsList <a name="DataOciIdentityDomainsApprovalWorkflowStepTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowStep } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTags">DataOciIdentityDomainsApprovalWorkflowStepTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowStep.DataOciIdentityDomainsApprovalWorkflowStepTags">DataOciIdentityDomainsApprovalWorkflowStepTags</a>

---



